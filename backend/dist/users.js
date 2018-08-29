"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.macthes = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "luizbsilva@gmail.com": new User('luizbsilva@gmail.com', 'Luiz B Silva', 'luiz23'),
    "luizsilva@gmail.com": new User('luizsilva@gmail.com', 'Luiz Silva', 'silva23')
};
