const axios = require('axios');
const querystring = require('querystring');

async function sendTokenSingle(templateKey, destination, param1, param2, param3) {
  const ApiKey = "e883424d-d70f-4e58-8ee3-4e21ea390ff1";

  const params = {
    ApiKey: ApiKey,
    TemplateKey: templateKey,
    Destination: destination,
    p1: param1,
    p2: param2,
    p3: param3,
  };

  const baseUrl = 'http://api.sms-webservice.com/api/V3/SendTokenSingle';

  // ساخت URL با پارامترهای کوئری
  const url = `${baseUrl}?${querystring.stringify(params)}`;

  try {
    const response = await axios.get(url, {
      timeout: 10000, // 10 ثانیه تایم‌اوت
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
// sendTokenSingle('templateKey123', '09120000000', 'param1Val', 'param2Val', 'param3Val').then(console.log);
