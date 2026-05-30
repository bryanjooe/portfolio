import CatStatue from "@/components/CatStatue";


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <CatStatue />

      <main className="relative z-10 no-scrollbar overflow-y-auto h-screen">
        <section className="min-h-screen w-full flex items-center justify-center overflow-hidden">
          <h1 className="text-6xl text-white">Lmao</h1>
        </section>
        <section className="min-h-screen w-full flex items-center justify-center overflow-hidden">
          <h1 className="text-6xl text-white">Lmao</h1>
        </section>
      </main>
    </div>
  );
}