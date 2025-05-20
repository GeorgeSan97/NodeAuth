import { Server } from './presentation/server';
import { envs } from './config';
import { AppRoutes } from './presentation/routes';
import { MongoDatabase } from './data/mongodb';
import { env } from 'process';

(() => {
    main();
})()


async function main(){
    //todo: await base de datos
    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL,
    });

    //todo: inicio de nuestro servidor

    new Server({
        port: envs.PORT ,
        routes: AppRoutes.routes
    })
    .start();
}