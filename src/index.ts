import "reflect-metadata";
import "dotenv-safe/config";
import { createConnection } from "typeorm";
import path from "path";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import { createKoaServer } from "routing-controllers";

const main = async () => {
  // create connection with database
  // note that it's not an active database connection
  await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [path.join(__dirname, "./entities/*")],
  });
  // create koa app
  const app = createKoaServer({
    controllers: [path.join(__dirname, "./controllers/*")],
  }) as Koa;

  // run app
  app.use(bodyParser());
  app.listen(process.env.PORT);

  // eslint-disable-next-line no-console
  console.log(`Koa application is up and running on port ${process.env.PORT}`);
};
main().catch((err) => {
  console.error(err);
});
