
import { MongoClient, ServerApiVersion } from "mongodb";

// all collection
export const collectionNamesObj = {
  servicesCollection: "text_services",
  userCollection: "text_user",
};

let client; // reuse 

export default async function dbConnect(collectionName) {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

  if (!uri) throw new Error("Please set MONGODB_URI in .env.local");
  if (!process.env.DB_NAME) throw new Error("Please set DB_NAME in .env.local");

  if (!client) {
    client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect(); 
  }

  return client.db(process.env.DB_NAME).collection(collectionName);
}
