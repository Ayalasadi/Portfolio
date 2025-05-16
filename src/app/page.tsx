import Image from "next/image";
import NeuronMap from '../components/NeuronMap';


// src/app/page.tsx

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Intro Section */}
      <div className="flex flex-col items-center justify-center h-screen text-screen space-y-4">
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

      {/* Neuron Map Section */}
      <section className="px-4 py-8 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Explore the Network
          </h2>
          <NeuronMap />
      </section>
    </main>
  );
}
