const axios = require('axios');

async function sendTokenMulti(templateKey, destination, userTraceId, parameters) {
  const ApiKey = "e883424d-d70f-4e58-8ee3-4e21ea390ff1";

  const data = {
    ApiKey: ApiKey,
    TemplateKey: templateKey,
    Recipients: [
      {
        Destination: destination,
        UserTraceId: userTraceId,
        Parameters: parameters
      }
    ]
  };

  const url = 'http://api.sms-webservice.com/api/V3/SendTokenMulti';

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
// sendTokenMulti('templateKey123', '09120000000', 'traceId123', { p1: 'value1', p2: 'value2' }).then(console.log);
