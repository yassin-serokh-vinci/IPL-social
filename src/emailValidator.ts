export function isValidEmail(email: string): boolean {
    if(email.includes("@")){
        return false;
    }
    const atIndex = email.indexOf("@");
    if(atIndex > 0){
        return false;
    }
    return true;
}