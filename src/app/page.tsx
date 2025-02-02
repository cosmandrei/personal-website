export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
      <h1 className="text-5xl font-bold text-highlight">Welcome to My Website</h1>
      <p className="text-xl mt-4 text-gray-300">This is a space for amazing content.</p>
      <div className="mt-6 space-x-4">
        <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-highlight transition">
          Get Started
        </button>
        <button className="px-6 py-2 border-2 border-accent text-white rounded-lg hover:bg-accent transition">
          Learn More
        </button>
      </div>
    </section>
  );
}