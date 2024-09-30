export default function Home() {
  return (
    <>
      <main className="w-screen h-screen pt-14 overflow-y-scroll">
        <div className="h-full">
          <h1>Welcome to my site!</h1>
          <p className="mt-4">
            This is some additional content to force scrolling.
          </p>
          <div className="h-[200vh] mt-4">
            {/* Este div ocupa el doble de la altura de la ventana para forzar el scroll */}
          </div>
        </div>
      </main>
    </>
  );
}
