//import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto,UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
    
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    
        const {name, email, password} = registerUserDto;
    
        try 
        {
            //aquí vamos a hacer todo el proceso supponiendo que ya tenemos la base de datos
            //1. Verificar si el correo exite
            //const exist = await UserModel.findOne({email});

            /* if (exist) throw CustomError.badRequest('El correo ya existe');
            
            const user = await UserModel.create({
                name: name,
                email: email,
                password: password,
            }); */

            //2. Encriptar la contraseña

            //await user.save();

            //3. Mapear la respuesta a nuestra entidad
            return new UserEntity
            (
                "1",
                name,
                email,
                password,
                //user.roles, 
                ["ADMIN_ROLE"]
                
            );
        } 
        catch (error) 
        {
            if( error instanceof CustomError)   
            {
                throw error;
            }
        }   
        
            throw CustomError.internalServer();
        }
    }
    
