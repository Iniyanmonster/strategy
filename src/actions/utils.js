import  databases  from '../services/appwrite';
import { ID } from 'appwrite';
export async function createUser(content){
    const responses = await databases.createDocument('675e5dd900187cb7da1e','675e5de600381f0f854e',ID.unique(),{"username":content.username, "password":content.password});
    return responses
}

export async function getUser(){
    const response = await databases.listDocuments('675e5dd900187cb7da1e','675e5de600381f0f854e')
    return response.documents;
}