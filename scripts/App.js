// get dotenv in order to access secure API keys.
require('dotenv').config();

// variables for process.env
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// get data and access it.
const client = require('twilio')(accountSid, authToken);

// sendSMS
const sendSMS = async (body) => {
    let msgOptions = {
        from: process.env.TWILIO_FROM_NUMBER,
        to: process.env.TWILIO_TO_NUMBER,
        body: body
        };
        try {
            const message = await client.messages.create(msgOptions);
            console.log(message);
        } catch (error) {
            console.log(error)
        }
};

sendSMS('Hello from Node.js App');