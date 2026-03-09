import { forwardRef } from 'react'
import type { GenerationSectionData } from '../data/familyTree.ts'
import FamilyBranchGroup from './FamilyBranchGroup.tsx'

type GenerationSectionProps = {
  section: GenerationSectionData
  active: boolean
  isFirst?: boolean
  onJumpToGroup: (groupId: string) => void
}

const GenerationSection = forwardRef<HTMLElement, GenerationSectionProps>(function GenerationSection(
  { section, active, isFirst, onJumpToGroup },
  ref,
) {
  return (
    <section
      ref={ref}
      data-generation={section.generation}
      className={`relative flex py-20 md:py-28 ${isFirst ? "items-start" : "min-h-svh items-center"}`}
    >
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(220px,280px)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="text-[11px] uppercase tracking-[0.32em] text-(--color-muted)">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 max-w-sm text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {section.title}
          </h2>
          <p
            className={`mt-4 max-w-sm text-sm leading-6 text-(--color-muted) transition-opacity duration-700 ${
              active ? 'opacity-100' : 'opacity-55'
            }`}
          >
            {section.description}
          </p>
        </div>

        <div
          className={`space-y-4 transition-all duration-700 md:space-y-5 ${
            active ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-20'
          }`}
        >
          {section.groups.map((group, index) => (
            <FamilyBranchGroup
              key={group.id}
              group={group}
              generation={section.generation}
              active={active}
              groupIndex={index}
              onJumpToGroup={onJumpToGroup}
            />
          ))}
        </div>
      </div>
    </section>
  )
})

export default GenerationSection
