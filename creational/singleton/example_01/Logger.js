class Logger {
    constructor() {
        this.logs = [];
    }

    get count() {
        return this.logs.length;
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp}-${message}`);
    }
}

// solution to make it really obvious to other developers
// class Singleton {
//     constructor() {
//         if (!Singleton.instance) {
//             Singleton.instance = new Logger();
//         }
//     }

//     getInstance() {
//         return Singleton.instance;
//     }
// }

// module.exports = Singleton;

// in node we just can export one instance of the logger and automatically have a singleton
module.exports = new Logger();
