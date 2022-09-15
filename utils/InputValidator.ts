import { User } from '../types/Model'

export class MissingFieldError extends Error {}

export function validateUserEntry(arg: any){
    // validating name here add more security params later
    if(!(arg as User).fullName){
        throw new MissingFieldError('Please enter your full name.')
    }
    // validating email input can add more errors here to catch injections
    if(!(arg as User).email){
        throw new MissingFieldError('Please enter your full name.')
    }
    // validating the password here 
    if(!(arg as User).password){
        throw new MissingFieldError('Please enter your full name.')
    }
    // validating the confirm password here
    if(!(arg as User).confirmPassword){
        throw new MissingFieldError('Please enter your full name.')
    }
}