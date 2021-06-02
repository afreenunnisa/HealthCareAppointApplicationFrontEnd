export class User {
    id: number;
    username: string;
    password: string;
    role: string = 'user';
    loggedIn: boolean = false ;
   /* constructor(id: number, username: string, password: string, role: string, loggedIn: boolean) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.loggedIn = loggedIn;
    }*/
    toString(): string {
        return `User [id=` + this.id + `, username=` + this.username + `, password=` + this.password + `, role=` + this.role + `, loggedIn=`
            + this.loggedIn + `]`;
    }

}
