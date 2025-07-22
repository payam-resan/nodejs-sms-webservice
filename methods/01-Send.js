const axios = require('axios');
const querystring = require('querystring');

async function send(recipients, text) {
  const ApiKey = "e883424d-d70f-4e58-8ee3-4e21ea390ff1";
  const sender = "30007546464646";

  const params = {
    ApiKey: ApiKey,
    Text: encodeURIComponent(text),
    Sender: sender,
    Recipients: recipients
  };

  const baseUrl = 'http://api.sms-webservice.com/api/V3/Send';

  // ساخت URL با پارامترهای کوئری
  const url = `${baseUrl}?${querystring.stringify(params)}`;

  try {
    const response = await axios.get(url, {
      timeout: 10000 // 10 ثانیه تایم‌اوت
    });
    return response.data;
  } catch (error) {
    // مدیریت خطا
    if (error.response) {
      return `Error: ${error.response.status} - ${error.response.statusText}`;
    } else {
      return `Error: ${error.message}`;
    }
  }
}

// مثال استفاده:
// send(['09120000000'], 'متن پیام').then(console.log);
