import CatStatue from "@/components/CatStatue";

const NavButton = ({ text }: { text: string }) => (
  <h1 className="text-1xl 
    font-bold 
    text-white 
    opacity-80 
    hover:opacity-100 
    transition-opacity 
    cursor-pointer 
    font-mono"
  >
    {text}
  </h1>
);


export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <CatStatue />

      <main className="relative z-10 no-scrollbar overflow-y-auto h-screen">
        <section className="h-screen w-full overflow-hidden flex flex-col items-center px-10">
			<div className="w-full h-[10vh] flex items-center justify-center">
				<div className="mr-auto flex gap-8">
				<NavButton text="Projects"/>
				<NavButton text="Know Me"/>
				</div>
				<img src="/logo.png" alt="Logo" className="h-10 w-auto invert"/>
				<div className="ml-auto flex gap-8">
				<NavButton text="About"/>
				<NavButton text="Contact"/>
				</div>
			</div>

			{/* Middle Section: Coordinates (Fills all remaining vertical space) */}
			<div className="flex-1 flex w-full items-center">
				<div>
				26.8206° N <br/> 30.8025° E
				</div>
			</div>

			{/* Bottom Section: Footer Spacer (Fixed small height) */}
			<div className="flex w-full h-10 items-center">
				{/* Footer Content */}
			</div>
		</section>
        <section className="min-h-screen w-full flex overflow-hidden">
          <h1 className="text-6xl text-white">Lmao</h1>
        </section>
      </main>
    </div>
  );
}