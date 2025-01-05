import { UserRole } from "./roles"

export {}

declare global {
  interface CustomJwtSessionClaims {
    id: string
    role: UserRole 
    email: string
    fullName: string
    profilePicture: string
   
  }
}
type validUrl = `https://${string}`