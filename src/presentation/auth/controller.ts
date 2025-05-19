import { Request,Response } from "express"

export class AuthController {
    //Aquí sí voy a aplicar inyección de dependencias
    constructor() {

    }


    registerUser =  (req: Request, res:Response) => {
        res.json('resgisterUserContrtoller');
    }
    
    loginUser =  (req: Request, res:Response) => {
        res.json('loginUserContrtoller');
    }
}