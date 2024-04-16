import winston from "winston";
import DiscordTransport from "winston-discord-transport";

const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            ),
            level: 'debug'
        }),
        new DiscordTransport({
            webhook: process.env.DISCORD_WEBHOOK,
            level: 'info'
        }),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

export { logger }
