export class User {
    constructor(public email: string,
        public name: string,
        private password: string) { }

    macthes(another: User): boolean {
        return another !== undefined && 
            another.email === this.email && 
            another.password === this.password
    }
}

export const users = {
    "luizbsilva@gmail.com": new User('luizbsilva@gmail.com', 'Luiz B Silva','luiz23'),
    "luizsilva@gmail.com": new User('luizsilva@gmail.com', 'Luiz Silva', 'silva23')
}