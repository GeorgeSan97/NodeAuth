import jwt from 'jsonwebtoken'
import { resolve } from 'path';


export class JwtAdapter {

    static async generateToken(
        payload: Object, 
        duration: jwt.SignOptions["expiresIn"] = '2h'): Promise<string|null>{

            //todo: generación del seed
            return new Promise( (resolve ) => {
                jwt.sign( payload, 'SEED', { expiresIn: duration }, (err, token) => {
                    if ( err ) return resolve(null);

                    resolve(token!);

                } )
            });
        };
        
}
