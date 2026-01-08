import { DocNavigation } from "./DocNavigation";
import { Introduction } from "./Introduction";

export const Documentation = () => {
  return (
    <main className="min-h-screen bg-[#f8f9fa] dark:bg-dark">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16">
        <div className="grid grid-cols-12 gap-10">
          
          {/* Left navigation (document outline) */}
          <aside className="col-span-12 lg:col-span-3 hidden lg:block">
            <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r border-border dark:border-dark_border pr-4">
              <DocNavigation />
            </div>
          </aside>

          {/* Document body */}
          <section className="col-span-12 lg:col-span-9">
            <article className="prose prose-slate dark:prose-invert max-w-none">
              <Introduction />
            </article>
          </section>

        </div>
      </div>
    </main>
  );
};
