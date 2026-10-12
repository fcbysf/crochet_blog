export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type CrochetPattern = {
  id: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  difficulty: Difficulty;
  mainImg: string;
  otherImgs: string[];
  buyUrl?: string;
};

/**
 * Central sample data for all crochet patterns.
 *
 * This file is intentionally separated from components and the context so the
 * dataset can later be replaced by a database or a remote API without touching
 * any component. To add a new pattern, simply append a new object to the array
 * below — it will automatically appear everywhere the context is consumed.
 */
export const samplePatterns: CrochetPattern[] = [
  {
    id: "chunky-beanie",
    title: "The Seamless Chunky Beanie Pattern",
    description:
      "A quick and cozy beanie worked in chunky yarn with a seamless finish. This pattern walks you through every stitch from brim to crown, making it perfect for crocheters ready to level up.",
    date: "Mar 15, 2024",
    author: "Sarah Mackenzie",
    category: "Garments",
    difficulty: "Intermediate",
    mainImg: "/hero.jpg",
    otherImgs: ["/placeholder-garment.svg", "/about-us.png"],
    buyUrl: "#",
  },
  {
    id: "amigurumi-dino",
    title: "Cute Amigurumi Dino Friend",
    description:
      "An adorable dinosaur amigurumi that makes a great gift for kids. Worked in the round with simple stitches and minimal sewing, ideal for a first amigurumi project.",
    date: "Feb 28, 2024",
    author: "Lisa Chen",
    category: "Amigurumi",
    difficulty: "Beginner",
    mainImg: "/placeholder-amigurumi.svg",
    otherImgs: [
      "/pattern%20imgs/Edit_crochet_doll_image_2K_20261011144404.jpg",
      "/placeholder-400x300.svg",
    ],
    buyUrl: "#",
  },
  {
    id: "granny-square",
    title: "Beginner's Granny Square Tutorial",
    description:
      "Learn the classic granny square with this step-by-step photo guide. A timeless stitch pattern you'll use in blankets, scarves, and countless other projects.",
    date: "Feb 10, 2024",
    author: "Emma Watson",
    category: "Stitch Tutorials",
    difficulty: "Beginner",
    mainImg: "/placeholder-tutorial.svg",
    otherImgs: ["/placeholder-400x300.svg", "/placeholder-800x600.svg"],
    buyUrl: "#",
  },
  {
    id: "lacy-blanket",
    title: "Lacy Blanket Pattern",
    description:
      "An elegant lacy blanket worked in fine cotton yarn. The open mesh stitch drapes beautifully and is perfect for warm-weather projects and heirloom gifts.",
    date: "Jan 22, 2024",
    author: "Sarah Mackenzie",
    category: "Blankets",
    difficulty: "Advanced",
    mainImg: "/placeholder-blanket.svg",
    otherImgs: ["/about-us.png", "/placeholder-800x600.svg"],
    buyUrl: "#",
  },
  {
    id: "textured-scarf",
    title: "Cozy Textured Scarf",
    description:
      "A beautifully textured scarf perfect for winter days. The raised stitch pattern adds warmth and visual interest using a single skein of yarn.",
    date: "Jan 15, 2024",
    author: "Lisa Chen",
    category: "Accessories",
    difficulty: "Beginner",
    mainImg: "/placeholder-accessory.svg",
    otherImgs: ["/hero.jpg", "/placeholder-400x300.svg"],
    buyUrl: "#",
  },
  {
    id: "crochet-doll",
    title: "Handmade Crochet Doll",
    description:
      "A charming handmade crochet doll with embroidered features and a sweet expression. A keepsake pattern for experienced crocheters who love character work.",
    date: "Dec 5, 2023",
    author: "Sarah Mackenzie",
    category: "Amigurumi",
    difficulty: "Intermediate",
    mainImg:
      "/pattern%20imgs/Edit_crochet_doll_image_2K_20261011144404.jpg",
    otherImgs: ["/placeholder-amigurumi.svg", "/hero.jpg"],
    buyUrl: "#",
  },
];