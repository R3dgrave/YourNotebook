import LabelList from "./Label/LabelList";
import NoteList from "./Notes/NoteList";

function App() {
  return (
    <div className="bg-background min-h-dvh text-textPrimary flex flex-col">
      <header className="w-full py-4 bg-primary text-white text-center shadow-md">
        <h1 className="text-2xl font-bold">Your Notebook</h1>
      </header>

      <div className="divider before:bg-border after:bg-border"></div>

      <main className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-[40%] lg:w-[25%] p-2 md:min-h-screen">
          <LabelList />
        </aside>

        <div className="divider divider-horizontal before:bg-border after:bg-border hidden md:flex"></div>

        <section className="w-full md:w-[60%] lg:w-[75%] p-2">
          <h2 className="text-lg font-semibold text-center text-primary mb-4">CRUD de Notas</h2>
          <NoteList />
        </section>
      </main>

      <footer className="w-full py-2 bg-secondary text-center text-white">
        <p className="text-sm">© 2025 Your Notebook</p>
      </footer>
    </div>
  );
}

export default App
