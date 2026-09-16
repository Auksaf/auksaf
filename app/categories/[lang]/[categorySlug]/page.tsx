import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import { articles } from "@/content/articles";
import { categories } from "@/content/categories";

type CategoryPageProps = {
  params: Promise<{
    lang: string;
    categorySlug: string;
  }>;
};

export async function generateStaticParams() {
  return categories.flatMap((category) => [
    {
      lang: "en",
      categorySlug: category.slug,
    },
    {
      lang: "ur",
      categorySlug: category.slug,
    },
  ]);
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { lang, categorySlug } = await params;

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const language = lang === "ur" ? "ur" : "en";
  const content = category[language];

  const canonicalPath = `/categories/${language}/${category.slug}`;
  const englishPath = `/categories/en/${category.slug}`;
  const urduPath = `/categories/ur/${category.slug}`;

  return {
    title: content.title,
    description: content.description,
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

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { lang, categorySlug } = await params;

  const language = lang === "ur" ? "ur" : "en";
  const isUrdu = language === "ur";

  const category = categories.find(
    (item) => item.slug === categorySlug
  );

  if (!category) {
    notFound();
  }

  const content = category[language];

  const categoryArticles = articles.filter(
    (article) => article.categorySlug === category.slug
  );

  return (
    <main
      dir={isUrdu ? "rtl" : "ltr"}
      lang={isUrdu ? "ur" : "en"}
      className="min-h-screen bg-transparent text-[#E9E4DC]"
    >
      <Navbar />

      <div className="hidden md:block">
        <MouseGlow />
      </div>

      <section className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-36 sm:pt-40">
        <header className="max-w-3xl">
          <div className="flex items-center justify-between gap-4">
            <Link
              href={`/categories/${language}`}
              className="text-sm font-medium text-[#B08D57] hover:opacity-60"
            >
              {isUrdu ? "← تمام زمرے" : "← All Categories"}
            </Link>

            <div className="flex items-center gap-3 text-sm font-medium">
              <Link
                href={`/categories/en/${category.slug}`}
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
                href={`/categories/ur/${category.slug}`}
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
            {isUrdu ? "زمرہ" : "Category"}
          </p>

          <h1 className="mt-5 font-[var(--font-cormorant)] text-5xl leading-tight md:text-6xl">
            {content.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#C9C1B6]">
            {content.description}
          </p>
        </header>

        <div className="mt-16 border-t border-white/10">
          {categoryArticles.map((article) => {
            const articleContent = article[language];

            return (
              <article
                key={article.slug}
                className="border-b border-white/10 py-10"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#B08D57]">
                  {articleContent.category}
                </p>

                <h2 className="mt-3 font-[var(--font-cormorant)] text-3xl">
                  <Link
                    href={`/articles/${language}/${article.slug}`}
                    className="hover:opacity-60"
                  >
                    {articleContent.title}
                  </Link>
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#C9C1B6]">
                  {articleContent.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8F877D]">
                  <span>
                    <time dateTime={article.publishedDate}>
                      {article.published}
                    </time>
                  </span>

                  <span>
                    {isUrdu
                      ? `${article.readingTime} کا مطالعہ`
                      : `${article.readingTime} read`}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}