'use strict'

import mongoose from "mongoose";

export const connectionDB = async() =>{
    try {
        mongoose.connection.on("error", ()=>{
            console.log("MongoDB | Could not be connect to MongoDB");
            mongoose.disconnect();
        });
        mongoose.connection.on("connecting", ()=>{
            console.log("MongoDB | Try connecting");
        });
        mongoose.connection.on("connected", () =>{
            console.log("MongoDB | Connecting to MongoDB...");
        });
        mongoose.connection.on("open", ()=>{
            console.log("MongoDB | The connection is successful to the database");
        });
        mongoose.connection.on("reconnected", () =>{
            console.log("MongoDB | Reconnected to MongoDB");
        });
        mongoose.connection.on("disconnected", ()=>{
            console.log((`MongoDB | Disconnected to MongoDB`));
        });
        await mongoose.connect(process.env.URI_DATABASE,{
            serverSelectionTimeoutMS: 2000,
            maxPoolSize:50
        });
    } catch (er) {
        console.log(`Database connection failed \n ${er}`);
    };
};