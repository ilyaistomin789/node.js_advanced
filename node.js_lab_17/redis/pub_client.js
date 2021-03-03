const redis = require('redis');

const pub_client = redis.createClient('//redis-19054.c240.us-east-1-3.ec2.cloud.redislabs.com:19054', {password: 'ycDnhfFGO0wMKwPnx5nmUR1rzdBLn1ke'});

pub_client.on('connect', () => {
    console.log('Connected to ilyaistomin_db/redis');
})
pub_client.on('ready', () => {
    console.log('ready to go');
})
pub_client.on('error', (e) => {
    console.log(`error: ${e.message}`);
})

pub_client.on('end', () => {
    console.log('end');
})
pub_client.publish('main_channel', 'message from publish_client');

