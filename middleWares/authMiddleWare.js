const jwt = require('jsonwebtoken') 
const User = require('../models/userModel')

const checkUser = async (req, res, next) => {
    const token = req.cookies.jwtToken;
    // console.log(token);
    if(token){
        try {
            const authUser = await jwt.verify(token, 'Group7');
            User.findById(authUser.id)
                .then(user => {
                    const {username, email, createdAt, updatedAt, id} = user;
                    res.locals.user = {username, email, createdAt, updatedAt, id};
                    next();
                })
                .catch(err => {
                    res.locals.user = null;
                    next();
                })
        } catch (error) {
            res.locals.user = null;
            next();
        }
    }
    else {
        res.locals.user = null
        next();
    }
    
}

const isLoggedIn = async (req, res, next) => {
    const token = req.cookies.jwtToken;
    if(token) {
        const decodedToken = await jwt.verify(token, 'Group7');
        if(decodedToken) {
        next()
        } else {
            res.redirect('/login');
        }   
    } else {
        res.redirect('/login');
    }
}

module.exports = { checkUser, isLoggedIn}