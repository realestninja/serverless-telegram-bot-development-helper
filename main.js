import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import * as dotenv from "dotenv"

dotenv.config()
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.on(message(), (ctx) => {
	// console.log(ctx)
	const { message } = ctx.update;
	const { id } = message.from;
	const { text } = message;

  bot.telegram.sendMessage(id, "hello world");
});
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

export default bot;

