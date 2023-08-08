import './utils/dotenv.config';

import Server from './server.class';
import Database from './database.class';

const server = new Server({
  logger: true,
});
const database = new Database();

function bootstrap() {
  database.connect();
  server.start(process.env.PORT);
}

bootstrap();
