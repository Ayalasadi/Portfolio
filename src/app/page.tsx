import Image from "next/image";

// src/app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">
          Synapse
        </h1>
        <p className="text-lg text-gray-400">
          A network of engineered systems and emotional intelligence.
        </p>
        <p className="text-sm text-gray-600">
          Interface initializing.
        </p>
      </div>
    </main>
  );
}
