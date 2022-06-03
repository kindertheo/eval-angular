
export interface Article{
    id: number,
    id_article: number,
    titre: string,
    contenu: string,
    creation: string
  }
  
export interface ArticleArray extends Array<Article>{}