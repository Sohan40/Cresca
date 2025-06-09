const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  const width = 1200;
  const height = 630;
  const publicDir = path.join(__dirname, '../public');
  const logoPath = path.join(publicDir, 'logo.svg');

  try {
    // Create a white background
    const background = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      }
    })
    .png()
    .toBuffer();

    // Create gradient overlay
    const gradient = await sharp({
      create: {
        width,
        height,
        channels: 4,
        background: { r: 37, g: 99, b: 235, alpha: 0.1 } // Blue with 10% opacity
      }
    })
    .png()
    .toBuffer();

    // Resize logo
    const logo = await sharp(logoPath)
      .resize(200, 200)
      .toBuffer();

    // Composite all layers
    await sharp(background)
      .composite([
        { input: gradient },
        {
          input: logo,
          gravity: 'center',
          left: (width - 200) / 2,
          top: (height - 200) / 2
        }
      ])
      .png()
      .toFile(path.join(publicDir, 'og-image.png'));

    console.log('OG image generated successfully!');
  } catch (error) {
    console.error('Error generating OG image:', error);
  }
}

generateOGImage(); 