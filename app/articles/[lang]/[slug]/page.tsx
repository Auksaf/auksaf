import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import { articles } from "@/content/articles";

const baseUrl = "https://auksaf.com";

type ArticlePageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return articles.flatMap((article) => [
    {
      lang: "en",
      slug: article.slug,
    },
    {
      lang: "ur",
      slug: article.slug,
    },
  ]);
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const language = lang === "ur" ? "ur" : "en";
  const content = article[language];

  const canonicalPath = `/articles/${language}/${article.slug}`;
  const englishPath = `/articles/en/${article.slug}`;
  const urduPath = `/articles/ur/${article.slug}`;

  return {
    title: content.title,
    description: content.excerpt,
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: englishPath,
        ur: urduPath,
        "x-default": englishPath,
      },
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { lang, slug } = await params;

  const language = lang === "ur" ? "ur" : "en";
  const isUrdu = language === "ur";

  const article = articles.find(
    (item) => item.slug === slug
  );

  if (!article) {
    notFound();
  }

  const content = article[language];

  const canonicalUrl = `${baseUrl}/articles/${language}/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${canonicalUrl}#article`,
    headline: content.title,
    description: content.excerpt,
    url: canonicalUrl,
    inLanguage: language,
    datePublished: article.publishedDate,
    articleSection: content.category,
    author: {
      "@type": "Organization",
      name: "AUKSAF",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "AUKSAF",
      url: baseUrl,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}/#website`,
      name: "AUKSAF Fragrance Journal",
      url: baseUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <main
      dir={isUrdu ? "rtl" : "ltr"}
      lang={isUrdu ? "ur" : "en"}
      className="min-h-screen bg-transparent text-[#E9E4DC]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <div className="hidden md:block">
        <MouseGlow />
      </div>

      <article className="relative z-10 mx-auto max-w-3xl px-6 pb-20 pt-36 sm:pt-40">
        <header>
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/categories/${language}/${article.categorySlug}`}
              className="text-sm font-medium text-[#B08D57] hover:opacity-60"
            >
              {isUrdu ? "← تمام زمرے" : "← All Categories"}
            </Link>

            <div className="flex items-center gap-3 text-sm font-medium">
              <Link
                href={`/articles/en/${article.slug}`}
                className={
                  language === "en"
                    ? "text-[#B08D57]"
                    : "text-[#817970] hover:text-[#B08D57]"
                }
              >
                English
              </Link>

              <span className="text-white/20">|</span>

              <Link
                href={`/articles/ur/${article.slug}`}
                className={
                  language === "ur"
                    ? "text-[#B08D57]"
                    : "text-[#817970] hover:text-[#B08D57]"
                }
              >
                اردو
              </Link>
            </div>
          </div>

          <p className="mt-10 text-sm font-medium tracking-[0.25em] uppercase text-[#B08D57]">
            {content.category}
          </p>

          <h1
            className={`mt-5 text-5xl leading-tight md:text-6xl ${
              isUrdu ? "font-gulzar" : ""
            }`}
          >
            {content.title}
          </h1>

          <p
            className={`mt-6 text-xl leading-8 text-[#C9C1B6] ${
              isUrdu ? "font-gulzar" : ""
            }`}
          >
            {content.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-y border-white/10 py-4 text-sm text-[#91887D]">
            <span>
              {isUrdu ? "اشاعت: " : "Published: "}
              <time dateTime={article.publishedDate}>
                {article.published}
              </time>
            </span>

            <span>
              {isUrdu ? "مطالعے کا وقت: " : "Reading time: "}
              {article.readingTime}
            </span>
          </div>
        </header>

        <div className="mt-14 space-y-10 text-lg leading-8 text-[#C9C1B6]">
          {content.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className={`text-3xl text-[#E9E4DC] ${
                  isUrdu ? "font-gulzar" : ""
                }`}
              >
                {section.heading}
              </h2>

              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className={`mt-4 ${
                    isUrdu ? "font-gulzar" : ""
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>

        {article.sources && article.sources.length > 0 && (
          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl">
              {isUrdu
                ? "ذرائع اور مزید مطالعہ"
                : "Sources & Further Reading"}
            </h2>

            <div className="mt-6 space-y-5">
              {article.sources.map((source) => (
                <div key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#B08D57] hover:opacity-60"
                  >
                    {source.title}
                  </a>

                  {(source.organization || source.author) && (
                    <p className="mt-1 text-sm text-[#91887D]">
                      {source.organization || source.author}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {article.relatedArticles &&
          article.relatedArticles.length > 0 && (
            <section className="mt-16 border-t border-white/10 pt-10">
              <h2 className="text-2xl">
                {isUrdu ? "متعلقہ مضامین" : "Related Articles"}
              </h2>

              <div className="mt-6 space-y-5">
                {article.relatedArticles.map((relatedSlug) => {
                  const relatedArticle = articles.find(
                    (item) => item.slug === relatedSlug
                  );

                  if (!relatedArticle) {
                    return null;
                  }

                  const relatedContent = relatedArticle[language];

                  return (
                    <div key={relatedArticle.slug}>
                      <Link
                        href={`/articles/${language}/${relatedArticle.slug}`}
                        className={`text-xl text-[#B08D57] hover:opacity-60 ${
                          isUrdu ? "font-gulzar" : ""
                        }`}
                      >
                        {relatedContent.title}
                      </Link>

                      <p
                        className={`mt-1 text-sm leading-6 text-[#9F978D] ${
                          isUrdu ? "font-gulzar" : ""
                        }`}
                      >
                        {relatedContent.excerpt}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}
      </article>

      <div dir="ltr">
        <Footer />
      </div>
    </main>
  );
}