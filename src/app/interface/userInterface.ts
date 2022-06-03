
export interface User {
    id: number
    niveau: number
    pseudo: string
    email: string
    password: string    
    avatar: string
  }
  
export interface UserArray extends Array<User>{}