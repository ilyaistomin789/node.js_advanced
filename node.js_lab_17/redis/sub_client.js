const redis = require('redis');

const sub_client = redis.createClient('//redis-19054.c240.us-east-1-3.ec2.cloud.redislabs.com:19054', {password: 'ycDnhfFGO0wMKwPnx5nmUR1rzdBLn1ke'});

sub_client.on('connect', () => {
    console.log('Connected to ilyaistomin_db/redis');
})
sub_client.on('ready', () => {
    console.log('ready to go');
})
sub_client.on('error', (e) => {
    console.log(`error: ${e.message}`);
})

sub_client.on('end', () => {
    console.log('end');
})
sub_client.on('subscribe', (channel, count) => {console.log(`subscribed: channel: ${channel}, count: ${count}`)});
sub_client.on('message', (channel, message) => {console.log(`Message from ${channel}: ${message}`)});

sub_client.subscribe('main_channel');

