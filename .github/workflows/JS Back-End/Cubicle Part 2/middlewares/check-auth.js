// module.exports = function isLogged(req, res, next) {


//     if (!req.user) {
//         return res.render('/user/login');
//     }
//     if (req.user) {
//         return res.render('/products');
//     }
//     next();
// }


module.exports = function isLogged(shouldBeAuthenticated) {
    return function(req, res, next) {
        const isNotAuthWhenAuthIsRequired =
            shouldBeAuthenticated && !req.user;
        if (
            (isNotAuthWhenAuthIsRequired) ||
            (!shouldBeAuthenticated && req.user)
        ) {
            res.redirect(isNotAuthWhenAuthIsRequired ? '/user/login' : '/products');
            return;
        }
        next();
    };
};