const {TELEGRAM_TOKEN} = require('./config/config');

const TelegramApi = require('node-telegram-bot-api');

const bot = new TelegramApi(TELEGRAM_TOKEN, {
    polling: {
        interval: 300, //время запроса с клиента на сервер
        autoStart: true, //если бот не запущен
        params: { timeout: 10 },
    }
});

bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);
    await bot.sendMessage(chatId, "ECHO    " + text);
    await bot.sendSticker(
        chatId,
        "https://cdn.tlgrm.ru/stickers/ff6/4b6/ff64b611-aa7c-3603-b73c-7cd86d4b71dc/192/9.webp"
    );
});
