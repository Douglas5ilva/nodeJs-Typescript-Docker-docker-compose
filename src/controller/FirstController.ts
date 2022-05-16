import { Request, Response } from "express"

class FirstController {

    public home(req: Request, res: Response) {
        return res.json({ message: 'Server Typescript is Running...' })
    }
}

export const firstController = new FirstController()
