export type CategoryContent = {
  title: string;
  description: string;
};

export type Category = {
  slug: string;
  en: CategoryContent;
  ur: CategoryContent;
};

export const categories: Category[] = [
  {
    slug: "perfumery-basics",
    en: {
      title: "Perfumery Basics",
      description:
        "Understand the foundations of perfumery, from fragrance composition to concentration and application.",
    },
    ur: {
      title: "پرفیومری کی بنیادی باتیں",
      description:
        "پرفیومری کی بنیادی باتوں کو سمجھیں، جن میں خوشبو کی ساخت، ارتکاز اور استعمال کے اصول شامل ہیں۔",
    },
  },

  {
    slug: "fragrance-notes",
    en: {
      title: "Fragrance Notes",
      description:
        "Explore individual fragrance materials and understand their character, role, and place in perfumery.",
    },
    ur: {
      title: "خوشبو کے نوٹس",
      description:
        "خوشبو کے مختلف اجزاء کو جانیں اور ان کی خصوصیات، کردار اور پرفیومری میں مقام کو سمجھیں۔",
    },
  },

  {
    slug: "oud-traditional-perfumery",
    en: {
      title: "Oud & Traditional Perfumery",
      description:
        "Discover oud, traditional fragrance practices, and the heritage behind some of perfumery's most fascinating materials.",
    },
    ur: {
      title: "عود اور روایتی پرفیومری",
      description:
        "عود، روایتی خوشبو سازی کے طریقوں اور پرفیومری کے چند دلچسپ ترین اجزاء سے وابستہ تاریخی ورثے کو دریافت کریں۔",
    },
  },
];
