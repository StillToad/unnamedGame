import express from 'express';
import { Knock } from "@knocklabs/node"
import dotenv from "dotenv"
dotenv.config()

//import passport and discord-passport
import passport from 'passport'
import DiscordStrategy from 'passport-discord'
import session from 'express-session'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
})


const app = express();

app.use(session({
    secret
}))


passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {

}))
const knock = new Knock(process.env.KNOCK_SECRET_API_KEY);

console.log(await knock.users.get('123'))

await knock.workflows.trigger("mentions", {
    recipients: ["123"],
    actor: "123",
    data: { "mention_body": "hai haiiii helloo ^.^", "page_id": "page_id", "page_name": "page_name", "variableKey": "Preview data value" }
})

await knock.users.identify("123", {
    name: "Strawbee"
})