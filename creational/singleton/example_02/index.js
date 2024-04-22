// react_js_patterns - frontendmasters

import { connection } from './dbConnection.js';
// import { connect } from './dbConnection2.js';
import { increment, returnCount } from './Counter.js';

connection.connect();

// connect();
increment();
increment();
increment();
increment();

returnCount();
