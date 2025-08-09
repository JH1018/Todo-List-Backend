'use strict';

import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import { connectionDB } from "./mongo.js";

const middlewares = (app) => {
    app.use(helmet());
    app.use(cors());
    app.use(morgan("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
}

export const connectionMongoDB = async () => {
    try{
        await connectionDB();
    }catch(err){
        console.log(`Data Base connection is failed, please try again ${err}`);
    };
};

export const initServer = () =>{
    const app = express();
    const timeInit = Date.now();
    try{
        middlewares(app);
        connectionDB();
        app.listen(process.env.PORT);
        const elapsedTime = Date.now() - timeInit;
        console.log(`Server running on port ${process.env.PORT} ${elapsedTime}ms`);
    }catch(err){
        console.log(`Server failed to start: ${err}`);
    };
};