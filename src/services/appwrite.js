import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('675e5d8c0003e9e781c1');

const databases = new Databases(client);

export default databases;