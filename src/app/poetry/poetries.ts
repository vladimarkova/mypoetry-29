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
    content: `
      Защото да помниш означава да си човек<br>
      И защото да си човек значава да помниш<br>
      Не! Не разваляй нито и ред...<br>
      Всичко докосваш! Картина във спомен<br>
      <br>
      И пак не разбирам, дете<br>
      Откъде намираш тези сили<br>
      Аз съм голям човек<br>
      И животът ме изпива, виждаш<br>
      <br>
      Обаче ставам сутрин<br>
      И премятам новия си шал<br>
      Още незакусил, сънен<br>
      Аз познавам... че животът си съм дал!<br>
      <br>
      Влади М.
    `
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
