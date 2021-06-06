export class User {
    id: number;
    username: string;
    password: string;
    role: string = 'user';
    loggedIn: boolean = false ;
}
