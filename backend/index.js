import express from 'express';
import { Knock } from "@knocklabs/node"
import dotenv from "dotenv"
dotenv.config()
import path from 'path'

//import passport and discord-passport
import passport from 'passport'
import DiscordStrategy from 'passport-discord'
import session from 'express-session'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI).then(() => {
    Utils.logger.info('Connected to MongoDB')
}).catch((err) => {
    Utils.logger.error(err)
})
//this will load every .js in submodels folder
import Models from './models/Models'
import Utils from './utils/Utils'

const app = express();

app.use(session({}))


/*passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {

}))*/
const knock = new Knock(process.env.KNOCK_SECRET_API_KEY);

Utils.logger.debug(`Test knock user fetch: ${await knock.users.get("123")}`)

//static route for frontend
app.use(express.static(path.join(__dirname, '../frontend/dist')))

//now we put api routes here before the catch all route


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

app.listen(5000, () => {
    Utils.logger.info('Server is running on port 5000')
})