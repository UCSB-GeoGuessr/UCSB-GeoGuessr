import Link from "next/link";

export default function HomePage() {
  return (
    
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-5xl font-bold mb-8">UCSB GeoGuessr</h1>
      <Link href="/game">
        <button className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Start
          
        </button>
      </Link>
    </div>
  );
}
