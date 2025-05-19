import { Router } from 'express';
//import { AuthController } from './controller';
//import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infrastructure';
 
export class AuthRoutes {
    static get routes(): Router{
        const router = Router();

        router.use('/api/auth', AuthRoutes.routes);
        
        return router;
    }
}