import { Request,Response } from "express"
import { AuthRepository, CustomError, RegisterUserDto } from "../../domain";
import { JwtAdapter } from "../../config";

export class AuthController {
    //Aquí sí voy a aplicar inyección de dependencias
    constructor(
        private readonly authRepository: AuthRepository
    ) { }

    private handleError = (error : unknown, res:Response) => {
        if( error instanceof CustomError )
        {
            return res.status(error.statusCode).json({error: error.message})
        }

        console.log(error);
        return res.status(500).json({error: 'Internal server error'})
    }


    registerUser =  (req: Request, res:Response) => {
        const [error, registerUserDto] = RegisterUserDto.create(req.body);
        if (error) { res.status(400).json({ error }); return} 

        this.authRepository.register(registerUserDto!)
        .then(  async(user) => {
            res.json({
                user,
                token: await JwtAdapter.generateToken({email: user.email})
                
            })
        } )
        .catch( error => this.handleError(error, res));
    }

    
    loginUser =  (req: Request, res:Response) => {
        res.json('loginUserContrtoller');
    }
}



