import CatStatue from "@/components/CatStatue";

export default function Home() {
  return (
    <div>
      <CatStatue/>
      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-6xl text-white">
            Bryan Joe
          </h1>
        </section>
      </main>
    </div>
  );
}