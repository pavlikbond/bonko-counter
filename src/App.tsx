import { Baby, Cake } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import GenerationSection from "./components/GenerationSection.tsx";
import UpcomingBirthdays from "./components/UpcomingBirthdays.tsx";
import {
  branchDescendantCounts,
  busiestBirthdayMonth,
  familyStats,
  generationSections,
  newestBonko,
  totalFamilyMembers,
  upcomingBirthdays,
} from "./data/familyTree.ts";

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
                <h1 className="text-5xl font-semibold tracking-tight text-white md:text-5xl">Bonko Counter</h1>
                <p className="mt-2 text-(--color-muted)">How many Bonkos are there, anyway?</p>
              </div>

              <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-4 md:p-5">
                <div className="flex items-end gap-3">
                  <span className="text-6xl font-semibold leading-none text-(--color-accent) md:text-6xl">
                    {totalFamilyMembers}
                  </span>
                  <span className="max-w-32 pb-1 text-xs uppercase tracking-[0.24em] text-(--color-muted)">
                    Bonkos eating vareniki daily
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { value: familyStats.founders, label: "founders" },
                { value: familyStats.kids, label: "kids" },
                { value: familyStats.grandkids, label: "grandkids" },
                { value: familyStats.greatGrandkids, label: "great- grandkids" },
                { value: familyStats.marriedIn, label: "married in" },
              ].map((stat) => (
                <span key={stat.label} className=" px-2 py-1 text-sm tracking-wide text-(--color-muted)">
                  <span className="font-semibold text-(--color-accent)">{stat.value}</span> {stat.label}
                </span>
              ))}
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-2xl border border-(--color-accent)/15 bg-(--color-accent)/5 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-accent)/15">
                  <Baby className="h-4.5 w-4.5 text-(--color-accent)" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">Youngest Bonko</p>
                  <p className="truncate text-sm font-semibold text-white">
                    {newestBonko.name} <span className="font-normal text-(--color-accent)">{newestBonko.lastName}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-(--color-gold)/15 bg-(--color-gold)/5 px-4 py-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--color-gold)/15">
                  <Cake className="h-4.5 w-4.5 text-(--color-gold)" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.24em] text-(--color-muted)">Busiest Birthday Month</p>
                  <p className="text-sm font-semibold text-white">
                    {busiestBirthdayMonth.month}{" "}
                    <span className="font-normal text-(--color-gold)">{busiestBirthdayMonth.count} birthdays</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <UpcomingBirthdays entries={upcomingBirthdays} />
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
            isFirst={index === 0}
            descendantCounts={branchDescendantCounts}
            onJumpToGroup={scrollToGroup}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
