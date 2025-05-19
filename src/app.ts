import { env } from 'process';
import { Server } from './presentation/server';
import { envs } from './config';

(() => {
    main();
})()


async function main(){
    //todo: await base de datos

    //todo: inicio de nuestro servidor

    new Server({
        port: envs.PORT ,
    })
    .start();
}