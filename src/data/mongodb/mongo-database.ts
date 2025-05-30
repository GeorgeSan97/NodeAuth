import mongoose from "mongoose";

interface Options {
    mongoUrl: string;
    dbName: string;
}

export class MongoDatabase {
    static async connect(otions: Options) {

        const { mongoUrl, dbName } = otions;

        try {
           await mongoose.connect(mongoUrl,{
                dbName: dbName,
            });

            console.log("Connected to MongoDB");
            return true;
        } catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    }
}