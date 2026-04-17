export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-zinc-950 px-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          YoungHouse
        </h1>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Your Next.js app is ready. Start building in{" "}
          <code className="rounded bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-700 dark:text-zinc-300">
            src/app/page.tsx
          </code>
          .
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-zinc-900 dark:bg-zinc-50 px-6 py-2.5 text-sm font-semibold text-white dark:text-zinc-900 shadow-sm hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors"
          >
            Documentation
          </a>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-2.5 text-sm font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            Learn Next.js
          </a>
        </div>
      </div>
    </main>
  );
}
