import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

const patternsData = [
  {
    id: "1",
    title: "Beginner Granny Square",
    category: "Beginner",
    author: "Sarah Johnson",
    date: "2024-01-15",
    difficulty: "Easy",
    mainImg: "/patterns/granny-square.jpg",
    otherImgs: ["/patterns/granny-square-2.jpg", "/patterns/granny-square-3.jpg"],
    description: "A classic granny square pattern perfect for beginners learning the basics of crochet.",
  },
  {
    id: "2",
    title: "Sunset Stoles",
    category: "Intermediate",
    author: "Marie Chen",
    date: "2024-02-20",
    difficulty: "Medium",
    mainImg: "/patterns/sunset-stole.jpg",
    otherImgs: ["/patterns/sunset-stole-2.jpg"],
    description: "Elegant stole worked in gradient colors resembling a sunset over the horizon.",
  },
  {
    id: "3",
    title: "Cozy Cafe Blanket",
    category: "Intermediate",
    author: "Lisa Wang",
    date: "2024-03-10",
    difficulty: "Medium",
    mainImg: "/patterns/coffee-blanket.jpg",
    otherImgs: ["/patterns/coffee-blanket-2.jpg", "/patterns/coffee-blanket-3.jpg"],
    description: "A warm blanket worked in cafe colors, perfect for chilly evenings.",
  },
  {
    id: "4",
    title: "Moss Stitch Scarf",
    category: "Beginner",
    author: "Emily Davis",
    date: "2024-04-05",
    difficulty: "Easy",
    mainImg: "/patterns/moss-scarf.jpg",
    otherImgs: ["/patterns/moss-scarf-2.jpg"],
    description: "Simple moss stitch scarf that works up quickly and looks beautiful.",
  },
  {
    id: "5",
    title: "Lace Doilie",
    category: "Advanced",
    author: "Charlotte Miller",
    date: "2024-05-12",
    difficulty: "Advanced",
    mainImg: "/patterns/lace-doilie.jpg",
    otherImgs: ["/patterns/lace-doilie-2.jpg"],
    description: "Intricate lace doilie requiring patience and precision.",
  },
  {
    id: "6",
    title: "Flower Power Hat",
    category: "Beginner",
    author: "Olivia Brown",
    date: "2024-06-18",
    difficulty: "Easy",
    mainImg: "/patterns/hat.jpg",
    otherImgs: ["/patterns/hat-2.jpg", "/patterns/hat-3.jpg"],
    description: "Quick crochet hat with flower motifs, great for using up yarn scraps.",
  },
  {
    id: "7",
    title: "Postmodern Rectangle",
    category: "Intermediate",
    author: "Daniel Wilson",
    date: "2024-07-22",
    difficulty: "Medium",
    mainImg: "/patterns/rectangle.jpg",
    otherImgs: ["/patterns/rectangle-2.jpg"],
    description: "A geometric rectangle piece using modern color blocking techniques.",
  },
  {
    id: "8",
    title: "Puff Stitch Throw",
    category: "Intermediate",
    author: "Sophia Anderson",
    date: "2024-08-30",
    difficulty: "Medium",
    mainImg: "/patterns/throw.jpg",
    otherImgs: ["/patterns/throw-2.jpg", "/patterns/throw-3.jpg"],
    description: "Luxurious throw worked in puff stitches for ultimate coziness.",
  },
  {
    id: "9",
    title: "Shell Stitch Baby Blanket",
    category: "Beginner",
    author: "Jessica Taylor",
    date: "2024-09-15",
    difficulty: "Easy",
    mainImg: "/patterns/shell-blanket.jpg",
    otherImgs: ["/patterns/shell-blanket-2.jpg"],
    description: "Gentle shell stitch pattern, perfect for baby gifts.",
  },
];

export async function generateStaticParams() {
  return patternsData.map((pattern) => ({
    id: pattern.id,
  }));
}

function findPattern(id: string) {
  return patternsData.find((p) => p.id === id) || null;
}

export default function PatternDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pattern = findPattern(params.id);

  if (!pattern) {
    return (
      <main className="flex flex-1 items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Pattern not found
          </h1>
          <p className="mt-3 text-zinc-500 dark:text-zinc-400">
            Sorry, we couldn&apos;t find the pattern you&apos;re looking for.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all patterns
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Back link */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          <ArrowLeft className="h-4 w-4" />
          All patterns
        </Link>

        {/* Hero: main image left, details right */}
        <section className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative">
            <Image
              src={pattern.mainImg}
              alt={pattern.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
                {pattern.category}
              </span>

              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
                {pattern.title}
              </h1>

              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {pattern.difficulty}
                </span>
                <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {pattern.author}
                </span>
                <span className="rounded-full bg-zinc-50 px-2.5 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                  {pattern.date}
                </span>
              </div>

              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                {pattern.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery: small thumbnails in a row */}
        {pattern.otherImgs.length > 0 && (
          <div>
            <h2 className="mb-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              More from this pattern
            </h2>
            <div className="flex flex-wrap gap-2">
              {pattern.otherImgs.map((img, index) => (
                <div
                  key={index}
                  className="relative h-24 w-24 sm:h-32 sm:w-32 cursor-default overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800"
                >
                  <Image
                    src={img}
                    alt={`${pattern.title} view ${index + 1}`}
                    fill
                    sizes="96px"
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-400x300.svg";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support me */}
        <div className="mt-6 text-center">
          <a
            href="https://crochetmakerr.gumroad.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-8 py-3.5 text-lg font-medium text-white transition-colors hover:bg-zinc-800 max-w-md mx-auto"
          >
            Support me
          </a>
        </div>
      </div>
    </main>
  );
}