export type FamilyMember = {
  name: string;
  spouse?: string;
  children?: FamilyMember[];
};

export type FamilyGroup = {
  id: string;
  label: string;
  parentLabel?: string;
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
          children: [
            { name: "Ethan" },
            { name: "Matthew" },
            { name: "Philip" },
            { name: "Nellie" },
          ],
        },
        {
          name: "Joseph",
          spouse: "Lily",
          children: [
            { name: "Elsie" },
            { name: "Avie" },
            { name: "Silas" },
          ],
        },
        {
          name: "Pavel",
          spouse: "Tanya",
          children: [
            { name: "Lilah" },
            { name: "Noah" },
          ],
        },
        {
          name: "Mariya",
          spouse: "Andrey",
          children: [
            { name: "Addie" },
            { name: "Lucy" },
          ],
        },
        { name: "Mark", spouse: "Abby", children: [{ name: "Haddie" }] },
        { name: "Anna", spouse: "Ian" },
      ],
    },
    {
      name: "Anna",
      spouse: "Igor",
      children: [
        {
          name: "Roman",
          spouse: "Alina",
          children: [{ name: "Vera" }],
        },
        {
          name: "Liza",
          spouse: "Peter",
          children: [{ name: "Luka" }],
        },
        { name: "Nina" },
        { name: "David" },
      ],
    },
    {
      name: "Mike",
      spouse: "Ella",
      children: [
        {
          name: "Maxim",
          spouse: "Chloe",
          children: [
            { name: "Theo" },
            { name: "Noah" },
          ],
        },
        {
          name: "Kristina",
          spouse: "Artem",
          children: [{ name: "Maya" }],
        },
        {
          name: "Pavel",
          spouse: "Iryna",
          children: [
            { name: "Elias" },
            { name: "Zoe" },
            { name: "Mira" },
          ],
        },
        { name: "Sonia" },
        { name: "Mark" },
      ],
    },
    {
      name: "Olga",
      spouse: "Volodya",
      children: [
        {
          name: "Daria",
          spouse: "Anton",
          children: [{ name: "Ivy" }],
        },
        {
          name: "Victor",
          spouse: "Mia",
          children: [
            { name: "Leo" },
            { name: "Mila" },
          ],
        },
        { name: "Elina" },
        { name: "Tomas" },
      ],
    },
    {
      name: "Leo",
      spouse: "Nelly",
      children: [
        {
          name: "Stefan",
          spouse: "Julia",
          children: [
            { name: "Clara" },
            { name: "Owen" },
          ],
        },
        {
          name: "Marta",
          spouse: "Denis",
          children: [{ name: "Lila" }],
        },
        { name: "Peter" },
        { name: "Eva" },
        { name: "Luka" },
      ],
    },
    {
      name: "Tim",
      spouse: "Ira",
      children: [
        {
          name: "Alex",
          spouse: "Sofia",
          children: [
            { name: "Nina" },
            { name: "Isaac" },
          ],
        },
        {
          name: "Daniel",
          spouse: "Mila",
          children: [{ name: "Nova" }],
        },
        { name: "Elena" },
        { name: "Max" },
      ],
    },
    {
      name: "Dan",
      spouse: "Tanya",
      children: [
        {
          name: "Nikolai",
          spouse: "Anna",
          children: [
            { name: "Ella" },
            { name: "Jack" },
            { name: "Theo" },
          ],
        },
        {
          name: "Vera",
          spouse: "Roman",
          children: [{ name: "Sophie" }],
        },
        { name: "Adrian" },
        { name: "Mira" },
      ],
    },
  ],
};

const countFamilyMembers = (member: FamilyMember): number => {
  const childCount = member.children?.reduce((sum, child) => sum + countFamilyMembers(child), 0) ?? 0;

  return 1 + (member.spouse ? 1 : 0) + childCount;
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
      description:
        "Meet Peter and Diana -- the OGs. Scroll down and watch the chaos unfold.",
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
          members: member.children ?? [],
        }))
        .filter((group) => group.members.length > 0),
    },
  ];
};

export const totalFamilyMembers = countFamilyMembers(familyTree);
export const generationSections = buildGenerationSections(familyTree);
