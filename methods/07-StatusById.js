const axios = require('axios');

async function statusById(ids) {
  const ApiKey = "e883424d-d70f-4e58-8ee3-4e21ea390ff1";

  const data = {
    ApiKey: ApiKey,
    Ids: ids
  };

  const url = 'http://api.sms-webservice.com/api/V3/StatusById';

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

// نمونه استفاده:
// statusById(['id1', 'id2', 'id3']).then(console.log);
