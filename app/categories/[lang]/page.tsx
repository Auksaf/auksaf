import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import { categories } from "@/content/categories";

type CategoriesPageProps = {
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
}: CategoriesPageProps): Promise<Metadata> {
  const { lang } = await params;

  const language = lang === "ur" ? "ur" : "en";

  if (language === "ur") {
    return {
      title: "زمرے",
      description:
        "پرفیومری، خوشبو کے اجزاء، عود اور روایتی خوشبو سازی کے بارے میں مختلف موضوعات اور مضامین۔",
      alternates: {
        canonical: "/categories/ur",
        languages: {
          en: "/categories/en",
          ur: "/categories/ur",
          "x-default": "/categories/en",
        },
      },
    };
  }

  return {
    title: "Categories",
    description:
      "Explore categories covering perfumery, fragrance materials, oud, traditional perfumery, and the craft behind beautiful scents.",
    alternates: {
      canonical: "/categories/en",
      languages: {
        en: "/categories/en",
        ur: "/categories/ur",
        "x-default": "/categories/en",
      },
    },
  };
}

export default async function CategoriesPage({
  params,
}: CategoriesPageProps) {
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
                href="/categories/en"
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
                href="/categories/ur"
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
            {isUrdu ? "جرنل کا مطالعہ کریں" : "Explore the Journal"}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#C9C1B6]">
            {isUrdu
              ? "پرفیومری، خوشبو کے اجزاء، عود اور خوبصورت خوشبوؤں کے پیچھے موجود فن کے بارے میں معلومات کا ایک بڑھتا ہوا ذخیرہ۔"
              : "A growing collection of knowledge about perfumery, fragrance materials, oud, and the craft behind beautiful scents."}
          </p>
        </header>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {categories.map((category) => {
            const content = category[language];

            return (
              <article
                key={category.slug}
                className="border border-white/10 bg-[#1A1410]/80 p-8"
              >
                <h2 className="font-[var(--font-cormorant)] text-2xl">
                  {content.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#B8B0A5]">
                  {content.description}
                </p>

                <Link
                  href={`/categories/${language}/${category.slug}`}
                  className="mt-6 inline-block text-sm font-medium text-[#B08D57] hover:opacity-60"
                >
                  {isUrdu ? "مطالعہ کریں →" : "Explore →"}
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}