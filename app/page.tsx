import Counter from "./components/Counter";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <h1>APP ROUTER</h1>
        <Counter />
      </main>
    </>
  );
}
