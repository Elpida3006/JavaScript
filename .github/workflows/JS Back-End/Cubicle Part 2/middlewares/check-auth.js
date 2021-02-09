module.exports = function checkAuth(shouldBeAuthenticated) {
    return function(req, res, next) {
        // const isNotAuthWhenAuthIsRequired =
        //     shouldBeAuthenticated && !req.user;
        // if (
        //     (isNotAuthWhenAuthIsRequired) ||
        //     (!shouldBeAuthenticated && req.user)
        // ) {
        //     res.redirect(isNotAuthWhenAuthIsRequired ? 'user/login' : '/products');
        //     return;
        // }

        if (!req.user) {
            return res.redirect('/user/login');
        }
        if (req.user) {
            return res.redirect('/products');
        }
        next();
    };
};