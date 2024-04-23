import mongoose from "mongoose";

declare global {
  namespace globalThis {
    var _mongoDBCache: {
      connection: null | typeof mongoose;
      promise: null | typeof mongoose;
    };
  }
}

export async function dbConnect() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error(
      "Failed to establish connection with database, ensure that MONGODB_URI is added to .env.local"
    );
  }

  let dbCache = global._mongoDBCache;
  if (!dbCache)
    dbCache = global._mongoDBCache = { connection: null, promise: null };
  if (dbCache.connection) return dbCache.connection;

  dbCache.promise = await mongoose.connect(MONGODB_URI!).then((res) => {
    return res;
  });

  try {
    dbCache.connection = await dbCache.promise;
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }

  return dbCache.connection;
}
