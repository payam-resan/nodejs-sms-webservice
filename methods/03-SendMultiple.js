const axios = require('axios');

async function sendMultiple(destination, userTraceId, text) {
  const ApiKey = "e883424d-d70f-4e58-8ee3-4e21ea390ff1";
  const Sender = "30007546464646";

  const data = {
    ApiKey: ApiKey,
    Recipients: [
      {
        Sender: Sender,
        Text: text,
        Destination: destination,
        UserTraceId: userTraceId
      }
    ]
  };

  const url = 'http://api.sms-webservice.com/api/V3/SendMultiple';

  try {
    const response = await axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // 10 ثانیه تایم‌اوت
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else {
      return `Error: ${error.message}`;
    }
  }
}

// مثال استفاده:
// sendMultiple('09120000000', 'trace-id-123', 'متن پیامک').then(console.log);
