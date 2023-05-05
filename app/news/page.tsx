export const metadata = {
  title: "Create Next App - News",
  description: "Breaking News",
};

export default function NewsPage() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-[1fr_2fr_1fr]">
        <div className="bg-slate-400 p-10 md:col-start-2 md:col-end-4 xl:col-start-2 xl:col-end-3">
          1111
        </div>
        <div className="bg-slate-400 p-10 md:col-start-1 md:col-end-2 md:row-start-1 xl:col-start-1 xl:col-end-2">
          2222
        </div>
        <div className="bg-slate-400 p-10 md:col-start-1 md:col-end-4 xl:col-start-3 xl:col-end-4">
          3333
        </div>
      </div>
    </>
  );
}
