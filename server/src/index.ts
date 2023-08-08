import './utils/dotenv.config';

import Server from './server.class';

const server = new Server({
  logger: true,
});

server.start(process.env.PORT);
