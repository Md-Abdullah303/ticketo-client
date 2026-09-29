import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables. Please create a .env file and add it.");
}

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("ticketo-client");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  },
});