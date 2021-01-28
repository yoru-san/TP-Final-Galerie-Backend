const webpush = require('web-push');
let subscription;

exports.sendNotification = (title, message) => {
    const payload = JSON.stringify({ title, body: message });

    webpush
        .sendNotification(subscription, payload)
        .catch(err => console.error(err));
}

exports.registerSubscription = (sub) => {
    subscription = sub;
}