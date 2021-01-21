const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const verifySingUp = require("../middlewares/verifySignUp");

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-acces-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySingUp.checkDuplicateUserNameOrEmail,
            verifySingUp.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signin);
};