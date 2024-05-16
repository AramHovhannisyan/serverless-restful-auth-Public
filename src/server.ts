import app from "./app";
import { config } from "./config/config";
import connect from "./config/db";
import AppError from "./errorHandling/AppError";

/**
 * Building App
 */
const port = config.server.port;

app.listen(port, () => console.info(`listening on port ${port}`));

connect()
.then(() => {
  console.info('connected to DB');
})
.catch(err => {
  console.error('error while connecting DB', err);
  throw new AppError("Can't establish a connection to the database", 500);
});