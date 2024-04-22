let instance;

class DBConnection {
  constructor(uri) {
    if (instance) {
      throw new Error('Only once connection can exist');
    }
    this.uri = uri;
    instance = this;
  }

  connect() {
    console.log(`DB ${this.uri} has been connected!`);
  }

  disconnect() {
    console.log('DB disconnected');
  }
}

export const connection = Object.freeze(new DBConnection('mongodb://...'));
