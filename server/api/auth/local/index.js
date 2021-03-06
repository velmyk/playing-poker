const
    express = require('express'),
    passport = require('passport');

const
    auth = require('../auth.service'),
    router = express.Router();

router
    .post(['/', ''],
        (req, res, next) => {
            req.params.name = req.body.name;
            req.params.password = req.body.password;
            next();
        },
        passport.authenticate('local'),
        auth.setTokenCookie);

module.exports = router;