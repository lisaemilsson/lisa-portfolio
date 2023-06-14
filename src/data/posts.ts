export type Project = {
  slug: string
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'cook-wise',
    title: 'CookWise',
    description:
      'A concept app that automates your oven',
    image:
      '/cookwise.png',
  },
  {
    slug: 'ui-cards',
    title: 'UI Cards',
    description:
      'A Figma UI Card design',
    image:
      '/uicards.png',
  },
  {
    slug: 'green-circle',
    title: 'Green Circle',
    description:
      'A green app',
    image:
      '/greencircle.png',
  },
]
