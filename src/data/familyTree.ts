export type FamilyMember = {
  name: string;
  spouse?: string;
  formerSpouse?: string;
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
  spouse: "Diana",
  children: [
    {
      name: "Benjamin",
      spouse: "Lyubov",
      children: [
        {
          name: "Liza",
          spouse: "Yura",
          children: [{ name: "Ethan" }, { name: "Matthew" }, { name: "Philip" }, { name: "Nellie" }],
        },
        {
          name: "Joseph",
          spouse: "Lily",
          children: [{ name: "Elsie" }, { name: "Avie" }, { name: "Silas" }],
        },
        {
          name: "Pavel",
          spouse: "Tanya",
          children: [{ name: "Lilah" }, { name: "Noah" }],
        },
        {
          name: "Mariya",
          spouse: "Andrey",
          children: [{ name: "Addie" }, { name: "Lucy" }],
        },
        { name: "Mark", spouse: "Abby", children: [{ name: "Haddie" }] },
        { name: "Anna" },
      ],
    },
    {
      name: "Olga",
      spouse: "Volodya",
      children: [
        {
          name: "Dydi",
          spouse: "Jenny",
          children: [{ name: "Arianna" }, { name: "Annabel" }],
        },
        {
          name: "Timmich",
          spouse: "Angelina",
          children: [{ name: "Miko" }, { name: "Kai" }, { name: "Finley" }, { name: "Aviva" }],
        },
        {
          name: "Vital",
          spouse: "Liza",
          children: [{ name: "Vika" }, { name: "Jason" }, { name: "Matthew" }, { name: "Katie" }, { name: "Ava" }],
        },
        {
          name: "Anna",
          children: [{ name: "Abby" }],
        },
        {
          name: "Denis",
          spouse: "Oksana",
          children: [{ name: "Isla" }],
        },
        {
          name: "Lilya",
        },
      ],
    },
    {
      name: "Mike",
      spouse: "Alla",
      formerSpouse: "Ella",
      children: [
        {
          name: "David",
          spouse: "Anna",
          children: [{ name: "Lea" }, { name: "Laura" }, { name: "Simon" }],
        },
        {
          name: "Dan",
          spouse: "Anna",
          children: [{ name: "Camilla" }, { name: "Louis" }],
        },
        {
          name: "Jenny",
          spouse: "Ivan",
          children: [{ name: "Andre" }, { name: "Amilia" }, { name: "Benjamin" }, { name: "Dominic" }],
        },
      ],
    },
    {
      name: "Leo",
      spouse: "Nelly",
      children: [
        {
          name: "Janet",
        },
        {
          name: "Jason",
        },
        { name: "Jacob" },
      ],
    },
    {
      name: "Anna",
      spouse: "Igor",
      children: [
        {
          name: "Jessica",
          spouse: "Vitalik",
          children: [{ name: "Nelya" }, { name: "Sasha" }],
        },
        {
          name: "Kristina",
        },
        { name: "Carolyn" },
        { name: "Dan" },
        { name: "Philip" },
      ],
    },
    {
      name: "Tim",
      spouse: "Ira",
      children: [{ name: "Andrew" }, { name: "Lukas" }, { name: "Angelika" }],
    },
    {
      name: "Dan",
      spouse: "Tanya",
      children: [{ name: "Mary" }, { name: "Andrew" }],
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
      description: "Meet Peter and Diana -- the OGs. Scroll down and watch the chaos unfold.",
      groups: [
        {
          id: "root-couple",
          label: "The OG couple",
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
          label: `${member.name}${member.spouse ? ` + ${member.spouse}` : ""}`,
          formerSpouse: member.formerSpouse,
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

export const totalFamilyMembers = countFamilyMembers(familyTree);
export const generationSections = buildGenerationSections(familyTree);
export const familyStats = computeFamilyStats(familyTree);
