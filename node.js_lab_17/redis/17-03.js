const redis = require('redis');

const client = redis.createClient('//redis-19054.c240.us-east-1-3.ec2.cloud.redislabs.com:19054', {password: 'ycDnhfFGO0wMKwPnx5nmUR1rzdBLn1ke'});

client.on('connect', () => {
    console.log('Connected to ilyaistomin_db/redis');
})
client.on('ready', () => {
    console.log('ready to go');
})
client.on('error', (e) => {
    console.log(`error: ${e.message}`);
})

client.on('end', () => {
    console.log('end');
})
client.set('incr', 0);
console.log('incr was created');

console.time('first_time');
for (let i = 0; i < 10000; i++){
    client.incr('incr');
}
console.timeEnd('first_time');
console.log('incr completed');

console.time('second_time');
for (let i = 0; i < 10000; i++){
    client.decr('incr');
}
console.timeEnd('second_time');
console.log('decr completed');

client.quit();
