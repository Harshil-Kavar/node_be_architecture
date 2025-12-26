import { Application } from 'express';
import * as http from 'http';
import { bootstrapMicroframework, Microframework } from 'microframework-w3tec';
import { Connection } from 'typeorm/connection/Connection';

import { eventDispatchLoader } from '../../../src/loaders/eventDispatchLoader';
import { expressLoader } from '../../../src/loaders/expressLoader';
import { homeLoader } from '../../../src/loaders/homeLoader';
import { iocLoader } from '../../../src/loaders/iocLoader';
import { winstonLoader } from '../../../src/loaders/winstonLoader';
import { firebaseLoader } from '../../../src/loaders/fireBaseLoader';
// import { typeormLoader } from '../utils/typeormLoader';
import { mongoLoader } from '../../../src/loaders/mongoLoader';
import { elasticLoader } from '../../../src/loaders/elasticLoader';
import { redisLoader } from '../../../src/loaders/redisLoader';
export interface BootstrapSettings {
    app: Application;
    server: http.Server;
    connection: Connection;
    framework: Microframework;
}

export const bootstrapApp = async (): Promise<BootstrapSettings> => {
    const framework = await bootstrapMicroframework({
        loaders: [
            mongoLoader,
            winstonLoader,
            iocLoader,
            eventDispatchLoader,
            elasticLoader,
            expressLoader,
            homeLoader,
            firebaseLoader,
            redisLoader,
        ],
    });
    return {
        app: framework.settings.getData('express_app') as Application,
        server: framework.settings.getData('express_server') as http.Server,
        connection: framework.settings.getData('connection') as Connection,
        framework,
    } as BootstrapSettings;
};
