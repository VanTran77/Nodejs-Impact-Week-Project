const express = require('express')
require("./config/mongoose")
const cookieParser = require('cookie-parser')

const questionRouter = require('./routers/questionRouter')
const userRouter = require('./routers/userRouter');
const mainRouter = require('./routers/mainRouter');

// const session = require('express-session');
// const MongoDBStore = require("connect-mongodb-session")(session);
// const store = new MongoDBStore({
//     uri: 'mongodb://localhost/Impact-Week-Pre',
//     collection: "mySessions",
// });

const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser());

// app.use(
//     session({
//         secret: "secret",
//         resave: false,
//         saveUninitialized: false,
//         store: store,
//     })
// );

app.use(questionRouter, userRouter, mainRouter)

app.listen(1111, () => console.log('Connected to port 1111 ...'))