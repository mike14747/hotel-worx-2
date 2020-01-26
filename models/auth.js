const pool = require('../config/pool.js');

const Auth = {
    getUserByIdForPassport: (id, cb) => {
        const queryString = 'SELECT u.user_id, u.username, u.access_id FROM users AS u WHERE u.user_id=? LIMIT 1;';
        const queryParams = [id];
        pool.execute(queryString, queryParams, (err, result) => {
            if (err) cb(err, false);
            cb(null, result);
        });
    },
    getUserByUsernameForPassport: (username, cb) => {
        const queryString = 'SELECT u.user_id, u.username, u.password, u.access_id FROM users AS u WHERE username=? LIMIT 1;';
        const queryParams = [username];
        pool.execute(queryString, queryParams, (err, result) => {
            if (err) cb(err, false);
            cb(null, result);
        });
    },
};

module.exports = Auth;
