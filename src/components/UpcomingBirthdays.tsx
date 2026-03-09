import type { BirthdayEntry } from "../data/familyTree.ts";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(raw: string): string {
  const [mm, dd] = raw.split("-");
  const month = MONTHS[Number(mm) - 1] ?? mm;
  return `${month} ${Number(dd)}`;
}

function isBirthdayToday(raw: string): boolean {
  const now = new Date();
  const [mm, dd] = raw.split("-").map(Number);
  return now.getMonth() + 1 === mm && now.getDate() === dd;
}

function UpcomingBirthdays({ entries }: { entries: BirthdayEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <div className="glass-panel mt-3 px-4 py-4 md:px-6">
      <h2 className="text-2xl font-semibold text-(--color-muted)">Upcoming Birthdays</h2>

      <ul className="mt-3 space-y-2">
        {entries.map((entry) => {
          const isToday = isBirthdayToday(entry.bday);

          return (
            <li
              key={`${entry.name}-${entry.bday}`}
              className={`flex items-center justify-between rounded-2xl border px-4 py-3 ${
                isToday
                  ? "border-[rgba(138,173,126,0.2)] bg-[rgba(138,173,126,0.06)] shadow-[0_0_24px_rgba(138,173,126,0.08)]"
                  : "border-white/6 bg-white/3"
              }`}
            >
              <div className="flex items-center gap-3">
                {isToday ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 text-sm">🎂</span>
                ) : null}
                <span
                  className={`text-sm tracking-[0.14em] ${
                    isToday ? "font-bold text-white" : "font-medium text-white/75"
                  }`}
                >
                  {entry.name}
                  {entry.lastName ? (
                    <span className={isToday ? "text-white/55" : "text-white/45"}> {entry.lastName}</span>
                  ) : null}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {isToday ? (
                  <span className="rounded-full border border-[rgba(138,173,126,0.3)] bg-[rgba(138,173,126,0.12)] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.2em] text-(--color-accent)">
                    Today!
                  </span>
                ) : null}
                <span className={`text-sm tabular-nums ${isToday ? "font-bold text-white" : "text-white/45"}`}>
                  {formatDate(entry.bday)}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UpcomingBirthdays;
