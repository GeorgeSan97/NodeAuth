import express, { Router } from 'express';


interface Options {
    port?: number;
    routes: Router;
}

export class Server {

    public readonly app = express();
    private readonly routes: Router;

    private readonly port: number;

    constructor(options: Options) {
        const { port = 3000,routes} = options;
        this.port = port;
        this.routes = routes;
    }

    async start() {
            // Definir middleware
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: true }));

            this.app.use(this.routes);
            this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
            });
    }
}

