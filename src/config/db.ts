import mongoose from 'mongoose';
import { config } from "./config";

const { mongoHost, mongoPort, mongoUsername, mongoPassword } = config.db;
const uri = `mongodb://${mongoUsername}:${mongoPassword}@${mongoHost}:${mongoPort}`;

const connect = async () => {
  return mongoose.connect(uri,{ retryWrites: true });
};

export default connect;
