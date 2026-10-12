import ExternalLink from "lucide-react";

export const generateStaticParams = async () => {
  const { getPatterns } = await import("@/context/PatternsContext");
  const patterns = await getPatterns();
  return patterns.map((pattern) => ({
    id: pattern.id,
  }));
};

export default function PatternDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { getPatternById, patterns } = usePatterns();
  const pattern = getPatternById(id);

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

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

  const similar = patterns
    .filter((p) => p.id !== pattern.id && p.category === pattern.category)
    .slice(0, 3);

  const openLightbox = (src: string) => {
    setSelectedImg(src);
  };

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
                      (e.target as HTMLImageElement).src = FALLBACK_IMG;
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
            <ExternalLink className="h-5 w-5" />
            Support me
          </a>
        </div>
      </div>
    </main>
  );
}