export type Project = {
  slug: string
  title: string
  description: string
  image: string
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Portfolio',
    description:
      'My first react-app ever',
    image:
      '/test1.jpeg',
  },
  {
    slug: 'rock-paper-scissor',
    title: 'Rock Paper Scissor',
    description:
      'A fully functional rock paper scissors using javascript and css',
    image:
      '/test2.jpeg',
  },
  {
    slug: 'traffic-light',
    title: 'Traffic Light',
    description:
      'A CSS design to mimic a traffic light',
    image:
      '/test3.jpeg',
  },
  {
    slug: 'guessing-game',
    title: 'Guessing game',
    description:
      'A simple game written in JS + CSS to guess numbers',
    image:
      '/test1.jpeg',
  },
]
