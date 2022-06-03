
export interface Comment{
    id_commentaire: number,
    contenu: string,
    creation: string,
    id_article: number,
    id: number
    }
    
export interface CommentArray extends Array<Comment>{}
