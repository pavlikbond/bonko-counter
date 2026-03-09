import type { FamilyMember } from '../data/familyTree.ts'
import BdayBadge from './BdayBadge.tsx'

type CoupleCardProps = {
  member: FamilyMember
  active: boolean
  index: number
  compact?: boolean
  dark?: boolean
  founders?: boolean
  clickable?: boolean
  expanded?: boolean
  showExpandCue?: boolean
  onClick?: () => void
}

function CoupleCard({
  member,
  active,
  index,
  compact = false,
  dark = false,
  founders = false,
  clickable = false,
  expanded = false,
  showExpandCue = false,
  onClick,
}: CoupleCardProps) {
  const childCount = member.children?.length ?? 0

  return (
    <div className="branch-item">
      <button
        type="button"
        onClick={clickable ? onClick : undefined}
        aria-disabled={!clickable}
        className={`w-full rounded-[1.75rem] border p-4 text-left shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-700 ${
          dark ? 'border-white/6 bg-white/2.5' : 'border-white/10 bg-white/5'
        } ${
          active ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
        } ${
          expanded ? 'border-white/16 bg-white/6' : ''
        } ${
          clickable
            ? 'cursor-pointer hover:border-white/20 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30'
            : 'cursor-default'
        }`}
        style={{ transitionDelay: active ? `${index * 80}ms` : '0ms' }}
      >
        <div className="flex flex-col items-start">
          <div>
            <p
              className={`font-semibold uppercase tracking-[0.2em] ${
                dark ? 'text-white/84' : 'text-white'
              } ${
                compact ? 'text-sm md:text-base' : 'text-base md:text-lg'
              }`}
            >
              <span className={`underline underline-offset-4 ${founders ? 'text-(--color-gold) decoration-(--color-gold)/30' : 'decoration-white/30'}`}>{member.name}</span>
              <BdayBadge bday={member.bday} />
              {member.spouse ? (
                <>
                  <span className={`mx-1.5 ${dark ? 'text-white/30' : 'text-white/40'}`}>&amp;</span>
                  <span className={founders ? 'text-(--color-gold)' : ''}>{member.spouse.name}</span>
                  <BdayBadge bday={member.spouse.bday} />
                </>
              ) : null}
              {member.formerSpouse ? (
                <>
                  <span className={`mx-1.5 ${dark ? 'text-white/30' : 'text-white/40'}`}>&amp;</span>
                  <span className="text-white/45">{member.formerSpouse.name}<span className="ml-0.5 text-[0.7em] text-white/35">†</span></span>
                  <BdayBadge bday={member.formerSpouse.bday} />
                </>
              ) : null}
            </p>
          </div>

          {childCount > 0 ? (
            <span
              className={`mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] ${
                dark
                  ? 'border-white/6 bg-white/3 text-white/38'
                  : 'border-white/10 bg-white/6 text-(--color-muted)'
              } ${
                showExpandCue ? 'text-white/62' : ''
              }`}
            >
              {clickable ? `${childCount} kids` : `${childCount} next`}
              <span
                className={`inline-flex items-center justify-center text-white/55 transition-transform duration-300 ${
                  showExpandCue ? 'opacity-100' : 'opacity-0'
                } ${
                    expanded ? 'rotate-180' : ''
                  }`}
                aria-hidden="true"
              >
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-current">
                  <path d="M10 13.5 3.75 7.25l1.5-1.5L10 10.5l4.75-4.75 1.5 1.5Z" />
                </svg>
              </span>
            </span>
          ) : null}
        </div>
      </button>
    </div>
  )
}

export default CoupleCard
