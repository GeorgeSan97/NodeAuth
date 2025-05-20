import { BcryptAdapter } from "../../config";
import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto,UserEntity } from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

type HashFunction = (password: string) => string;
type CompareFunction = ( password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {
    
    constructor(
        private readonly hashPassword: HashFunction = BcryptAdapter.hash,
        private readonly comparePassword: CompareFunction = BcryptAdapter.compare,
    ) { }



    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    
        const {name, email, password} = registerUserDto;
    
        try 
        {
            //aquí vamos a hacer todo el proceso supponiendo que ya tenemos la base de datos
            //1. Verificar si el correo exite
            const exist = await UserModel.findOne({email});

            if (exist) throw CustomError.badRequest('El correo ya existe');
            
            //2. Encriptar la contraseña
            const user = await UserModel.create({
                name: name,
                email: email,
                password: this.hashPassword(password),
            }); 

            


            await user.save();

            //3. Mapear la respuesta a nuestra entidad
            //todo: falta un mapper
            return UserMapper.userEntityFromObject(user);
        } 
        catch (error) {
            if( error instanceof CustomError)   {
                throw error;
            }
        }   
        
            throw CustomError.internalServer();
        }
    }
    
