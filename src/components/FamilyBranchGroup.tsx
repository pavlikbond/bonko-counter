import { useState } from 'react'
import type { FamilyGroup } from '../data/familyTree.ts'
import BdayBadge from './BdayBadge.tsx'
import CoupleCard from './CoupleCard.tsx'

type FamilyBranchGroupProps = {
  group: FamilyGroup
  generation: number
  active: boolean
  groupIndex: number
  onJumpToGroup: (groupId: string) => void
}

function FamilyBranchGroup({
  group,
  generation,
  active,
  groupIndex,
  onJumpToGroup,
}: FamilyBranchGroupProps) {
  const groupDelay = groupIndex * 90
  const isDeepGeneration = generation >= 3
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null)

  return (
    <section id={group.id} className="glass-panel scroll-mt-36 p-4 md:p-6">
      <div
        className={`transition-all duration-700 ${
          active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-35'
        }`}
        style={{ transitionDelay: active ? `${groupDelay}ms` : '0ms' }}
      >
        {group.parentLabel ? (
          <p className="text-[10px] uppercase tracking-[0.28em] text-(--color-muted)">
            From {group.parentLabel}
          </p>
        ) : null}

        <h3 className="mt-1 text-lg font-semibold uppercase tracking-[0.18em] text-white">
          {group.label}
          {group.formerSpouse ? (
            <span className="text-white/40">
              {' '}+ <span className="text-white/45">{group.formerSpouse}<span className="ml-0.5 text-[0.7em] text-white/35">†</span></span>
            </span>
          ) : null}
        </h3>
      </div>

      <div className="branch-stack mt-4 space-y-3">
        {group.members.map((member, index) => {
          const childCount = member.children?.length ?? 0
          const isExpandableBranch = generation === 3 && childCount > 0
          const isExpanded = expandedMemberId === member.name

          return (
            <div key={member.name} className="space-y-3">
              <CoupleCard
                member={member}
                active={active}
                index={groupIndex * 2 + index}
                compact={generation > 1}
                dark={isDeepGeneration}
                clickable={childCount > 0}
                expanded={isExpandableBranch && isExpanded}
                showExpandCue={isExpandableBranch}
                onClick={() => {
                  if (generation === 1) {
                    onJumpToGroup('seven-kids')
                    return
                  }

                  if (generation === 2) {
                    onJumpToGroup(`${member.name.toLowerCase()}-branch`)
                    return
                  }

                  if (isExpandableBranch) {
                    setExpandedMemberId((currentMemberId) =>
                      currentMemberId === member.name ? null : member.name,
                    )
                  }
                }}
              />

              {isExpandableBranch ? (
                <div
                  className={`inline-branch-panel ${isExpanded ? 'is-open' : ''}`}
                  aria-hidden={!isExpanded}
                >
                  <div className="inline-branch-panel__inner">
                    <div className="inline-branch-grid">
                      {member.children?.map((child, childIndex) => (
                        <div
                          key={child.name}
                          className={`inline-branch-leaf transition-all duration-500 ${
                            active && isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                          }`}
                          style={{
                            transitionDelay:
                              active && isExpanded ? `${groupDelay + 80 + childIndex * 55}ms` : '0ms',
                          }}
                        >
                          <div className="flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-white/82">
                            {child.name}
                            <BdayBadge bday={child.bday} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FamilyBranchGroup
