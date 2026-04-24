export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 p-6">
      <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-zinc-900 to-zinc-500 dark:from-zinc-100 dark:to-zinc-500">
          Welcome to Your App
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Start building something incredible. Modify <code className="font-mono bg-zinc-200 dark:bg-zinc-800/50 px-2 py-1 rounded-md text-sm">app/page.tsx</code> to get started.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button className="px-8 py-3 rounded-full bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-800 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors">
            Documentation
          </button>
        </div>
      </div>
    </main>
  );
}