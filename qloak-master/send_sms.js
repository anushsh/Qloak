// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACefc6c01fbfd71ca518431675c5135268';
const authToken = '9e72f6165f3609b6cea3d92578266537';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Yas',
     from: '+18566198534',
     to: '+12674558355'
   })
  .then(message => console.log(message.sid));
