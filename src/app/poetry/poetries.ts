export interface IPoetry {
  id: string;
  content: string;
  dateCreated?: string;
  lastModified?: string;
  author?: string;
}

export const poetries: IPoetry[] = [
  {
    id: '1',
    content: 'My first poetry'
  },
  {
    id: '2',
    content: 'My second poetry'
  },
  {
    id: '3',
    content: 'My third poetry'
  },
];

export const addPoetry = (poetry: IPoetry) => {
  poetries.push(poetry);
}
