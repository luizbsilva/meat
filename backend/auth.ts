import { User, users } from './users';
import { Request, Response } from 'express'

export const handleAuthentication = (req: Request, resp: Response) => {
    const user: User = req.body
    if (isValid(user)) {
        const dbUser = users[user.email]
        resp.json({ name: dbUser.name, email: dbUser.email })

    } else {
        resp.status(403).json({ message: 'Dados inválidos.' })
    }

    function isValid(user: User) {
        if (!user) {
            return false
        }
        const dbUser = users[user.email]
        return dbUser != undefined && dbUser.macthes(user)
    }

}