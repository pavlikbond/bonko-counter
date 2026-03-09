export type PersonInfo = {
  name: string;
  lastName?: string;
  bday?: string;
};

export type FamilyMember = {
  name: string;
  lastName?: string;
  bday?: string;
  spouse?: PersonInfo;
  formerSpouse?: PersonInfo;
  children?: FamilyMember[];
};

export type FamilyGroup = {
  id: string;
  label: string;
  parentLabel?: string;
  formerSpouse?: string;
  members: FamilyMember[];
};

export type GenerationSectionData = {
  id: string;
  generation: number;
  eyebrow: string;
  navLabel: string;
  title: string;
  description: string;
  groups: FamilyGroup[];
};

export const familyTree: FamilyMember = {
  name: "Peter",
  lastName: "Bondarenko",
  bday: "10-08-1934",
  spouse: { name: "Diana", lastName: "Bondarenko", bday: "01-13-1937" },
  children: [
    {
      name: "Venya",
      lastName: "Bondarenko",
      bday: "03-25-1962",
      spouse: { name: "Lyuba", lastName: "Bondarenko", bday: "06-21-1962" },
      children: [
        {
          name: "Liza",
          lastName: "Andreyevskiy",
          bday: "04-10-1989",
          spouse: { name: "Yura", lastName: "Andreyevskiy", bday: "09-20-1988" },
          children: [
            { name: "Ethan", lastName: "Andreyevskiy", bday: "01-16-2012" },
            { name: "Matthew", lastName: "Andreyevskiy", bday: "01-04-2015" },
            { name: "Philip", lastName: "Andreyevskiy", bday: "05-29-2017" },
            { name: "Nellie", lastName: "Andreyevskiy", bday: "07-03-2021" },
          ],
        },
        {
          name: "Joseph",
          lastName: "Bondarenko",
          bday: "07-22-1990",
          spouse: { name: "Lily", lastName: "Bondarenko", bday: "10-14-1990" },
          children: [
            { name: "Elsie", lastName: "Bondarenko", bday: "08-08-2020" },
            { name: "Avie", lastName: "Bondarenko", bday: "03-10-2022" },
            { name: "Silas", lastName: "Bondarenko", bday: "09-10-2024" },
          ],
        },
        {
          name: "Pavel",
          lastName: "Bondarenko",
          bday: "07-26-1991",
          spouse: { name: "Tanya", lastName: "Bondarenko", bday: "06-02-1996" },
          children: [
            { name: "Lilah", lastName: "Bondarenko", bday: "04-22-2022" },
            { name: "Noah", lastName: "Bondarenko", bday: "06-03-2024" },
          ],
        },
        {
          name: "Mariya",
          lastName: "Radionov",
          bday: "12-05-1992",
          spouse: { name: "Andrey", lastName: "Radionov", bday: "06-20-1990" },
          children: [
            { name: "Addie", lastName: "Radionov", bday: "06-27-2018" },
            { name: "Lucy", lastName: "Radionov", bday: "08-24-2021" },
          ],
        },
        {
          name: "Mark",
          lastName: "Bondarenko",
          bday: "04-28-1997",
          spouse: { name: "Abby", lastName: "Bondarenko", bday: "02-03-2000" },
          children: [{ name: "Haddie", lastName: "Bondarenko", bday: "06-16-2024" }],
        },
        { name: "Anna", lastName: "Bondarenko", bday: "06-26-2001" },
      ],
    },
    {
      name: "Olga",
      lastName: "Petrenko",
      bday: "05-29-1964",
      spouse: { name: "Volodya", lastName: "Petrenko", bday: "10-02-1958" },
      children: [
        {
          name: "Dydi",
          lastName: "Petrenko",
          bday: "07-31-1984",
          spouse: { name: "Jenny", lastName: "Petrenko", bday: "04-09-1985" },
          children: [
            { name: "Arianna", lastName: "Petrenko", bday: "03-25-2011" },
            { name: "Annabel", lastName: "Petrenko", bday: "12-05-2016" },
          ],
        },
        {
          name: "Timmich",
          lastName: "Petrenko",
          bday: "07-06-1986",
          spouse: { name: "Angelina", lastName: "Petrenko", bday: "03-12-1987" },
          children: [
            { name: "Miko", lastName: "Petrenko", bday: "07-07-2016" },
            { name: "Finley", lastName: "Petrenko", bday: "10-16-2018" },
            { name: "Kai", lastName: "Petrenko", bday: "08-27-2021" },
            { name: "Aviva", lastName: "Petrenko", bday: "01-13-2025" },
          ],
        },
        {
          name: "Vital",
          lastName: "Petrenko",
          bday: "09-08-1987",
          spouse: { name: "Liza", lastName: "Petrenko", bday: "08-22-1987" },
          children: [
            { name: "Vika", lastName: "Petrenko", bday: "11-30-2005" },
            { name: "Katie", lastName: "Petrenko", bday: "05-19-2011" },
            { name: "Ava", lastName: "Petrenko", bday: "04-20-2012" },
            { name: "Jason", lastName: "Petrenko", bday: "03-09-2013" },
            { name: "Matthew", lastName: "Petrenko", bday: "09-13-2015" },
          ],
        },
        {
          name: "Anna",
          lastName: "Petrenko",
          bday: "05-20-1989",
          children: [{ name: "Abby", lastName: "Petrenko", bday: "06-07-2010" }],
        },
        {
          name: "Denis",
          lastName: "Petrenko",
          bday: "07-27-1991",
          spouse: { name: "Oksana", lastName: "Petrenko", bday: "01-04-1994" },
          children: [{ name: "Isla", lastName: "Petrenko", bday: "04-26-2024" }],
        },
        { name: "Lilya", lastName: "Petrenko", bday: "12-06-1996" },
      ],
    },
    {
      name: "Mike",
      lastName: "Bondarenko",
      bday: "03-01-1966",
      spouse: { name: "Alla", lastName: "Bondarenko", bday: "11-18-1968" },
      formerSpouse: { name: "Ella", lastName: "Bondarenko", bday: "10-01-1962" },
      children: [
        {
          name: "David",
          lastName: "Bondarenko",
          bday: "08-30-1989",
          spouse: { name: "Anna", lastName: "Bondarenko", bday: "09-12-1987" },
          children: [
            { name: "Lea", lastName: "Bondarenko", bday: "02-14-2019" },
            { name: "Laura", lastName: "Bondarenko", bday: "11-08-2020" },
            { name: "Simon", lastName: "Bondarenko", bday: "01-13-2019" },
          ],
        },
        {
          name: "Dan",
          lastName: "Bondarenko",
          spouse: { name: "Anya", lastName: "Bondarenko", bday: "03-21-1986" },
          children: [
            { name: "Camilla", lastName: "Bondarenko", bday: "05-02-2017" },
            { name: "Louis", lastName: "Bondarenko", bday: "02-20-2019" },
          ],
        },
        {
          name: "Jenny",
          lastName: "Iriciuc",
          bday: "09-15-1990",
          spouse: { name: "Ivan", lastName: "Iriciuc", bday: "04-20-1994" },
          children: [
            { name: "Andre", lastName: "Iriciuc", bday: "01-15-2022" },
            { name: "Amilia", lastName: "Iriciuc", bday: "06-06-2023" },
            { name: "Benjamin", lastName: "Iriciuc", bday: "11-19-2024" },
            { name: "Dominic", lastName: "Iriciuc", bday: "03-08-2026" },
          ],
        },
        { name: "Julie", lastName: "Bondarenko", bday: "07-11-1996" },
      ],
    },
    {
      name: "Leo",
      lastName: "Bondarenko",
      bday: "02-08-1969",
      spouse: { name: "Nelly", lastName: "Bondarenko", bday: "03-05-1973" },
      children: [
        { name: "Janet", lastName: "Bondarenko", bday: "12-26-1993" },
        { name: "Jason", lastName: "Bondarenko", bday: "04-23-1999" },
        { name: "Jacob", lastName: "Bondarenko", bday: "07-30-2004" },
      ],
    },
    {
      name: "Anna",
      lastName: "Melnichuk",
      bday: "04-02-1971",
      spouse: { name: "Igor", lastName: "Melnichuk", bday: "06-20-1967" },
      children: [
        {
          name: "Jessica",
          lastName: "Perepelitsa",
          bday: "06-10-1994",
          spouse: { name: "Vitalik", lastName: "Perepelitsa", bday: "09-14-1993" },
          children: [
            { name: "Nelya", lastName: "Perepelitsa", bday: "03-17-2022" },
            { name: "Sasha", lastName: "Perepelitsa", bday: "09-08-2025" },
          ],
        },
        { name: "Kristina", lastName: "Melnichuk", bday: "03-20-1996" },
        { name: "Carolyn", lastName: "Melnichuk", bday: "12-12-1997" },
        { name: "Dan", lastName: "Melnichuk", bday: "10-29-2003" },
        { name: "Philip", lastName: "Melnichuk", bday: "05-30-2006" },
      ],
    },
    {
      name: "Tim",
      lastName: "Bondarenko",
      bday: "04-17-1974",
      spouse: { name: "Ira", lastName: "Bondarenko", bday: "02-04-1975" },
      children: [
        { name: "Andrew", lastName: "Bondarenko", bday: "06-15-2005" },
        { name: "Lukas", lastName: "Bondarenko", bday: "12-16-2006" },
        { name: "Angelika", lastName: "Bondarenko", bday: "05-28-2009" },
      ],
    },
    {
      name: "Dan",
      lastName: "Bondarenko",
      bday: "08-12-1976",
      spouse: { name: "Tanya", lastName: "Bondarenko", bday: "08-16-1975" },
      children: [
        { name: "Mary", lastName: "Bondarenko", bday: "08-31-2001" },
        { name: "Andrew", lastName: "Bondarenko", bday: "03-12-2007" },
      ],
    },
  ],
};

const countFamilyMembers = (member: FamilyMember): number => {
  const childCount = member.children?.reduce((sum, child) => sum + countFamilyMembers(child), 0) ?? 0;

  return 1 + (member.spouse ? 1 : 0) + (member.formerSpouse ? 1 : 0) + childCount;
};

const buildGenerationSections = (root: FamilyMember): GenerationSectionData[] => {
  const secondGeneration = root.children ?? [];

  return [
    {
      id: "generation-1",
      generation: 1,
      eyebrow: "Where it all began",
      navLabel: "Roots",
      title: "Peter and Diana",
      description: "Meet Peter and Diana -- the couple who started it all. Scroll down to see how the family grew.",
      groups: [
        {
          id: "root-couple",
          label: "The founders",
          members: [root],
        },
      ],
    },
    {
      id: "generation-2",
      generation: 2,
      eyebrow: "The seven kids",
      navLabel: "7 Kids",
      title: "7 families and counting",
      description: "Peter and Diana had seven kids. Each one started their own little Bonko franchise.",
      groups: [
        {
          id: "seven-kids",
          label: "Peter + Diana's kids",
          members: secondGeneration,
        },
      ],
    },
    {
      id: "generation-3",
      generation: 3,
      eyebrow: "The grandkids",
      navLabel: "Grandkids",
      title: "Now we're really multiplying",
      description:
        "The seven siblings all had kids of their own. Tap any card with a kid count to open that branch and see the newest Bonkos underneath.",
      groups: secondGeneration
        .map((member) => ({
          id: `${member.name.toLowerCase()}-branch`,
          label: `${member.name}${member.spouse ? ` + ${member.spouse.name}` : ""}`,
          formerSpouse: member.formerSpouse?.name,
          members: member.children ?? [],
        }))
        .filter((group) => group.members.length > 0),
    },
  ];
};

const computeFamilyStats = (root: FamilyMember) => {
  let grandkids = 0;
  let greatGrandkids = 0;
  let marriedIn = 0;

  for (const child of root.children ?? []) {
    if (child.spouse) marriedIn++;
    if (child.formerSpouse) marriedIn++;

    for (const grandchild of child.children ?? []) {
      grandkids++;
      if (grandchild.spouse) marriedIn++;
      if (grandchild.formerSpouse) marriedIn++;

      for (const greatGrandchild of grandchild.children ?? []) {
        greatGrandkids++;
        if (greatGrandchild.spouse) marriedIn++;
        if (greatGrandchild.formerSpouse) marriedIn++;
      }
    }
  }

  return {
    founders: 1 + (root.spouse ? 1 : 0),
    kids: root.children?.length ?? 0,
    grandkids,
    greatGrandkids,
    marriedIn,
  };
};

export type BirthdayEntry = {
  name: string;
  lastName?: string;
  bday: string;
};

const collectBirthdays = (member: FamilyMember, parentLastName?: string): BirthdayEntry[] => {
  const entries: BirthdayEntry[] = [];
  const lastName = member.lastName ?? parentLastName;

  if (member.bday) entries.push({ name: member.name, lastName, bday: member.bday });
  if (member.spouse?.bday) entries.push({ name: member.spouse.name, lastName, bday: member.spouse.bday });
  if (member.formerSpouse?.bday)
    entries.push({ name: member.formerSpouse.name, lastName, bday: member.formerSpouse.bday });

  for (const child of member.children ?? []) {
    entries.push(...collectBirthdays(child, lastName));
  }

  return entries;
};

const getUpcomingBirthdays = (entries: BirthdayEntry[], count: number): BirthdayEntry[] => {
  const now = new Date();
  const todayMonth = now.getMonth();
  const todayDay = now.getDate();

  const withDaysUntil = entries.map((entry) => {
    const [mm, dd] = entry.bday.split("-").map(Number);
    const month = mm - 1;
    const day = dd;

    let daysUntil: number;
    const thisYear = new Date(now.getFullYear(), month, day);
    const diffMs = thisYear.getTime() - new Date(now.getFullYear(), todayMonth, todayDay).getTime();
    const diffDays = Math.round(diffMs / 86_400_000);

    if (diffDays >= 0) {
      daysUntil = diffDays;
    } else {
      const nextYear = new Date(now.getFullYear() + 1, month, day);
      daysUntil = Math.round(
        (nextYear.getTime() - new Date(now.getFullYear(), todayMonth, todayDay).getTime()) / 86_400_000,
      );
    }

    return { ...entry, daysUntil };
  });

  withDaysUntil.sort((a, b) => a.daysUntil - b.daysUntil);
  return withDaysUntil.slice(0, count);
};

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const findNewestBonko = (entries: BirthdayEntry[]): BirthdayEntry => {
  let newest = entries[0];
  let newestTime = 0;

  for (const entry of entries) {
    const [mm, dd, yyyy] = entry.bday.split("-").map(Number);
    const time = new Date(yyyy, mm - 1, dd).getTime();
    if (time > newestTime) {
      newestTime = time;
      newest = entry;
    }
  }

  return newest;
};

const findBusiestBirthdayMonth = (entries: BirthdayEntry[]): { month: string; count: number } => {
  const counts = new Array<number>(12).fill(0);

  for (const entry of entries) {
    const month = Number(entry.bday.split("-")[0]) - 1;
    counts[month]++;
  }

  let maxIndex = 0;
  for (let i = 1; i < 12; i++) {
    if (counts[i] > counts[maxIndex]) maxIndex = i;
  }

  return { month: MONTH_NAMES[maxIndex], count: counts[maxIndex] };
};

const computeBranchDescendantCounts = (root: FamilyMember): Map<string, number> => {
  const counts = new Map<string, number>();

  for (const child of root.children ?? []) {
    const total = countFamilyMembers(child);
    const self = 1 + (child.spouse ? 1 : 0) + (child.formerSpouse ? 1 : 0);
    counts.set(child.name, total - self);
  }

  return counts;
};

const allBirthdays = collectBirthdays(familyTree);

export const totalFamilyMembers = countFamilyMembers(familyTree);
export const generationSections = buildGenerationSections(familyTree);
export const familyStats = computeFamilyStats(familyTree);
export const upcomingBirthdays = getUpcomingBirthdays(allBirthdays, 5);
export const newestBonko = findNewestBonko(allBirthdays);
export const busiestBirthdayMonth = findBusiestBirthdayMonth(allBirthdays);
export const branchDescendantCounts = computeBranchDescendantCounts(familyTree);
