import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";
dotenv.config();
let client: any;

const MONGO_CONNECTION: string = `${process.env.MONGO_CONNECTION}`;
const DATABASE: string = `${process.env.DATABASE}`;

async function connect() {
  if (!client) {
    client = new MongoClient(MONGO_CONNECTION);
  }
  await client.connect();
  return client.db(DATABASE);
}

async function disconnect() {
  if (!client) {
    return true;
  }

  await client.close();
  client = null;
  return true;
}

export { connect, disconnect };
