import * as dotenv from 'dotenv'
import createError from 'http-errors'
import express from 'express'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'
dotenv.config()
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.locals.email = 'demo@gmail.com'

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
    res.send('hi!')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
// eslint-disable-next-line no-unused-vars
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    // res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.locals.error = process.env.APP_URL === 'development' ? err : {}
    // render the error page
    res.status(err.status || 500)
    // res.render('error');
    res.sendFile(__dirname + '/views/error.html')
})

/* test var */
// console.log(process.env.BASE_PATH);
// console.log(__dirname)

app.disable("view cache"); // TODO: off in prod

console.log("run server: " + process.env.APP_URL);
export default app
