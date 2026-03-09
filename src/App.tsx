import { useEffect, useRef, useState } from "react";
import GenerationSection from "./components/GenerationSection.tsx";
import { generationSections, totalFamilyMembers } from "./data/familyTree.ts";

function App() {
  const [activeGeneration, setActiveGeneration] = useState(1);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const sections = sectionRefs.current.filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveGeneration = () => {
      const targetY = window.innerHeight * 0.42;
      let nearestGeneration = activeGeneration;
      let nearestDistance = Number.POSITIVE_INFINITY;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const generation = Number(section.getAttribute("data-generation"));

        if (Number.isNaN(generation)) {
          return;
        }

        if (rect.top <= targetY && rect.bottom >= targetY) {
          nearestGeneration = generation;
          nearestDistance = -1;
          return;
        }

        if (nearestDistance === -1) {
          return;
        }

        const distance = Math.min(Math.abs(rect.top - targetY), Math.abs(rect.bottom - targetY));

        if (distance < nearestDistance) {
          nearestGeneration = generation;
          nearestDistance = distance;
        }
      });

      setActiveGeneration((currentGeneration) =>
        currentGeneration === nearestGeneration ? currentGeneration : nearestGeneration,
      );
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveGeneration);
    };

    updateActiveGeneration();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const scrollToGeneration = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToGroup = (groupId: string) => {
    const groupElement = document.getElementById(groupId);
    const generation = Number(groupElement?.closest("[data-generation]")?.getAttribute("data-generation"));

    if (!Number.isNaN(generation)) {
      setActiveGeneration(generation);
    }

    groupElement?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.08),transparent_26%)] opacity-80" />

      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 pt-4">
          <div className="glass-panel px-4 py-4 md:px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.34em] text-(--color-muted)">Bonko Counter</p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  How many Bonkos are there, anyway?
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-(--color-muted)">
                  It all started with Peter and Diana. Scroll down and see just how far this thing has spread.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-4 md:p-5">
                <p className="text-[11px] uppercase tracking-[0.28em] text-(--color-muted)">Current Bonkos</p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold leading-none text-white md:text-6xl">
                    {totalFamilyMembers}
                  </span>
                  <span className="max-w-32 pb-1 text-xs uppercase tracking-[0.24em] text-(--color-muted)">
                    Bonkos eating borscht daily
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {generationSections.map((section, index) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => scrollToGeneration(index)}
                  className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] transition-colors ${
                    activeGeneration === section.generation
                      ? "border-white/40 bg-white text-black"
                      : "border-white/10 bg-white/2 text-(--color-muted) hover:border-white/20 hover:text-white"
                  }`}
                >
                  {section.navLabel}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-24">
        {generationSections.map((section, index) => (
          <GenerationSection
            key={section.id}
            ref={(node) => {
              sectionRefs.current[index] = node;
            }}
            section={section}
            active={activeGeneration === section.generation}
            onJumpToGroup={scrollToGroup}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
