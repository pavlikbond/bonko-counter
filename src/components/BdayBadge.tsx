import * as Popover from '@radix-ui/react-popover'

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
]

function formatBday(raw: string): string {
  const [mm, dd, yyyy] = raw.split('-')
  const month = MONTHS[Number(mm) - 1] ?? mm
  const day = Number(dd)
  return `${month} ${day}, ${yyyy}`
}

function BdayBadge({ bday }: { bday?: string }) {
  if (!bday) return null

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => e.stopPropagation()}
          className="ml-2 inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 align-middle text-white/50 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
          aria-label={`Birthday: ${formatBday(bday)}`}
        >
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
            <path d="M12 6a2 2 0 0 0 2-2c0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97A2 2 0 0 0 12 6zm4.6 9.99-1.07-1.07-1.08 1.07a3.5 3.5 0 0 1-4.9 0L8.47 14.9 7.4 15.99a3.5 3.5 0 0 1-2.4.98V20c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2v-3.03c-.87 0-1.73-.33-2.4-.98zM18 9h-5V7h-2v2H6a3 3 0 0 0-3 3v1.97c0 .97.78 1.53 1.75 1.53.47 0 .95-.18 1.3-.54l2.42-2.42 2.41 2.42a1.86 1.86 0 0 0 2.24 0l2.42-2.42 2.41 2.42c.36.36.84.54 1.3.54.97 0 1.75-.56 1.75-1.53V12a3 3 0 0 0-3-3z" />
          </svg>
        </span>
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          side="top"
          sideOffset={6}
          className="z-50 rounded-2xl border border-white/12 bg-[rgba(18,18,18,0.95)] px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.5)] backdrop-blur-md data-[state=closed]:animate-[fadeOut_120ms_ease] data-[state=open]:animate-[fadeIn_120ms_ease]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <span className="block text-[10px] uppercase tracking-[0.2em] text-white/45">Birthday</span>
          <span className="mt-0.5 block whitespace-nowrap text-sm font-bold tracking-wide text-white">
            {formatBday(bday)}
          </span>
          <Popover.Arrow className="fill-[rgba(18,18,18,0.95)]" width={12} height={6} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default BdayBadge
