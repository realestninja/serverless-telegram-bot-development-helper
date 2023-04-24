import axios from 'axios';
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import * as dotenv from "dotenv"

dotenv.config()

const WRANGLER_LOCAL = "http://localhost:8787";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message(), (ctx) => {
  if (ctx.hasOwnProperty("update")) axios.post(WRANGLER_LOCAL, ctx.update);
});

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;

