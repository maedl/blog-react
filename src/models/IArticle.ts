export interface IArticle {
  id: string;
  title: string;
  content: string[];
}

export const mockArticles: IArticle[] = [
  {
    id: '1',
    title: 'Headline with great info 1',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
  },
  {
    id: '2',
    title: 'Headline with great info 2',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
  },
  {
    id: '3',
    title: 'Headline with great info 3',
    content: [
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
      'Lorem ipsum dolor sit amet.',
    ],
  },
];
