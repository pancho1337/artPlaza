const { User } = require('./../models/user');

let auth = (req, res, next) =>{
    let token = req.cookies.w_auth;

    User.findByToken(token, (err, user)=>{
        if(err) throw err;
        if(!user) return res.json({
            // this will be used for redux
            isAuth: false,
            error: true
        });
        req.token = token; 
        req.user = user;
        next();
    })
}

module.exports = { auth }