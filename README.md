# Helper for developing a Serverless Telegram Bot

## The usecase for this tool:
Development of a telegram-bot that will run serverless as a Cloudflare worker. Use the [serverless-telegram-bot-boilerplate](https://github.com/realestninja/serverless-telegram-bot-boilerplate) in combination with this repository for a quick start.

## What this tool does:
It let's you forward telegram messages to your local dev environment of your worker, simulating the web-hook. This makes it easy to develop the serverless telegram-bot.

## Installation
### Clone this repo
```git clone git@github.com:realestninja/serverless-telegram-bot-development-helper.git```

### Add your bot token

```
cd serverless-telegram-bot-development-helper/
echo "BOT_TOKEN = <your bot token>" >> .env
yarn install
yarn dev
```

Any message sent to your bot should be redirected to http://localhost:8787 as a POST request.

### Troubleshooting
```
(node:2925635) UnhandledPromiseRejectionWarning: Error: 404: Not Found
    at Telegram.callApi (foo/bar/node_modules/telegraf/lib/core/network/client.js:293:19)
```
Invalid BOT_TOKEN. Check the .env file. The BOT_TOKEN should look like this:

```
BOT_TOKEN = 207862373:ABEcDnZQzlfrPFfgIvZQtrZSl9mja4eNEmY
```
(This is an example with a made up token)
