import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import { articles } from "@/content/articles";

type ArticlesPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export async function generateStaticParams() {
  return [
    {
      lang: "en",
    },
    {
      lang: "ur",
    },
  ];
}

export async function generateMetadata({
  params,
}: ArticlesPageProps): Promise<Metadata> {
  const { lang } = await params;

  const language = lang === "ur" ? "ur" : "en";

  if (language === "ur") {
    return {
      title: "مضامین",
      description:
        "خوشبو، پرفیومری کے اجزاء، مرکبات اور پرفیومری کے فن کے بارے میں تحقیق پر مبنی مضامین۔",
      alternates: {
        canonical: "/articles/ur",
        languages: {
          en: "/articles/en",
          ur: "/articles/ur",
          "x-default": "/articles/en",
        },
      },
    };
  }

  return {
    title: "Articles",
    description:
      "Carefully researched articles about fragrance, perfumery materials, composition, and the craft behind the scents we create.",
    alternates: {
      canonical: "/articles/en",
      languages: {
        en: "/articles/en",
        ur: "/articles/ur",
        "x-default": "/articles/en",
      },
    },
  };
}

export default async function ArticlesPage({
  params,
}: ArticlesPageProps) {
  const { lang } = await params;

  const language = lang === "ur" ? "ur" : "en";
  const isUrdu = language === "ur";

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
            <p className="text-sm font-medium tracking-[0.25em] uppercase text-[#B08D57]">
              AUKSAF Fragrance Journal
            </p>

            <div className="flex items-center gap-3 text-sm font-medium">
              <Link
                href="/articles/en"
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
                href="/articles/ur"
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

          <h1 className="mt-5 font-[var(--font-cormorant)] text-5xl leading-tight md:text-6xl">
            {isUrdu
              ? "علم، خوشبو کے اجزاء اور پرفیومری کا فن۔"
              : "Knowledge, materials, and the art of perfumery."}
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#C9C1B6]">
            {isUrdu
              ? "خوشبو، پرفیومری کے اجزاء، مرکبات اور ان خوشبوؤں کے پیچھے موجود فن کے بارے میں تحقیق پر مبنی معلومات کا ایک بڑھتا ہوا ذخیرہ۔"
              : "A growing collection of carefully researched articles about fragrance, perfumery materials, composition, and the craft behind the scents we create."}
          </p>
        </header>

        <div className="mt-16 border-t border-white/10">
          {articles.map((article) => {
            const content = article[language];

            return (
              <article
                key={article.slug}
                className="border-b border-white/10 py-10"
              >
                <p className="text-sm font-medium tracking-[0.2em] uppercase text-[#B08D57]">
                  {content.category}
                </p>

                <h2 className="mt-3 font-[var(--font-cormorant)] text-3xl">
                  <Link
                    href={`/articles/${language}/${article.slug}`}
                    className="hover:opacity-60"
                  >
                    {content.title}
                  </Link>
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#C9C1B6]">
                  {content.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#8F877D]">
                  <span>
                    <time dateTime={article.publishedDate}>
                      {article.published}
                    </time>
                  </span>

                  <span>
                    {isUrdu
                      ? `${article.readingTime} مطالعہ`
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