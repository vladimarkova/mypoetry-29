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
];

export const addPoetry = (poetry: IPoetry) => {
  poetries.push(poetry);
}
