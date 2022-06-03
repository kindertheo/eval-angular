export interface AuthInterface{
    email: string,
    id: number,
    niveau: number,
    password: string | null,
    token: string
  }
  
export interface JWTInterface {
    exp: number,
    iat: number,
    id: number,
    niveau: number
  }

export interface RegisterInterface {
    pseudo: string
    email: string
    password: string
    avatar: string | null
  }


export interface LoginInterface {
    email: string
    password: string
  }
  