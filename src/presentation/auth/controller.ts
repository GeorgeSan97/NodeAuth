import { Request,Response } from "express"
import { RegisterUserDto } from "../../domain";

export class AuthController {
    //Aquí sí voy a aplicar inyección de dependencias
    constructor() {

    }


    registerUser =  (req: Request, res:Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) return res.status(400).json({ error });

        res.json(registerUserDto);
    }
    
    loginUser =  (req: Request, res:Response) => {
        res.json('loginUserContrtoller');
    }
}