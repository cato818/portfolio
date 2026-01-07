const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.setViewport({width: 1440, height: 900});
  const filePath = 'file://' + path.join(__dirname, 'index.html');
  await page.goto(filePath, {waitUntil: 'networkidle2'});
  // Wait a bit for fonts and images to load
  await page.waitForTimeout(800);

  const out = path.join(__dirname, 'mockup-desktop-1440x900.png');
  await page.screenshot({path: out, fullPage: false});
  console.log('Screenshot saved to', out);
  await browser.close();
})();