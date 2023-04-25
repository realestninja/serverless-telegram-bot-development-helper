import { config } from "dotenv";
import axios from 'axios';
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import { WRANGLER_LOCAL } from "./constants.js";

config()

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message(), (ctx) => {
  if (Object.prototype.hasOwnProperty.call(ctx, "update")) {
    axios.post(WRANGLER_LOCAL, ctx.update);
  }
});

bot.launch();
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;

