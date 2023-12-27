import { MongoClient, Db } from 'mongodb';

let client: MongoClient | null = null;

export async function connectToMongoDB(): Promise<Db> {
  if (!client) {
    client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    console.log('Connected to MongoDB');
  }

  return client.db(); // Return the database instance
}

export async function closeMongoDBConnection(): Promise<void> {
  if (client) {
    await client.close();
    console.log('Connection to MongoDB closed');
  }
}
