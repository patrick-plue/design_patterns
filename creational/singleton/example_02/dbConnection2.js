// let url = 'mongodb/...';

// export function connect() {
//   console.log(`DB ${url} has been connected!`);
// }

// esmodules are singleton per default

const dbConnection = (uri) =>
  Object.freeze({
    uri,
    connect: () => console.log(`DB ${uri} has been connected`),
    disconnect: () => console.log('Db disconnected'),
  });

const connection = dbConnection('mongodb://');
export default connection;
