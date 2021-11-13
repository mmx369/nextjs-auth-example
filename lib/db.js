import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://max:insert69@cluster0.xvui7.mongodb.net/next-auth?retryWrites=true&w=majority"
  );
  return client;
}
