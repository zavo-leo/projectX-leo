import {MongoClient, ServerApiVersion } from "mongodb";

import {uri} from "./secret.js";


export const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
});

