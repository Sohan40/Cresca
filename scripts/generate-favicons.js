const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Base image path - replace this with your logo path
const baseImagePath = path.join(__dirname, '../public/logo.svg');

async function generateImages() {
  try {
    // Generate favicon.ico (32x32)
    await sharp(baseImagePath)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));

    // Generate favicon-16x16.png
    await sharp(baseImagePath)
      .resize(16, 16)
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));

    // Generate apple-touch-icon.png (180x180)
    await sharp(baseImagePath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // Generate android-chrome-192x192.png
    await sharp(baseImagePath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));

    // Generate android-chrome-512x512.png
    await sharp(baseImagePath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));

    // Generate og-image.png (1200x630)
    await sharp(baseImagePath)
      .resize(1200, 630, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'og-image.png'));

    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
  }
}

generateImages(); 