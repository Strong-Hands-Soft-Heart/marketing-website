const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [
  { size: 192, name: 'icon-192' },
  { size: 512, name: 'icon-512' },
  { size: 196, name: 'icon-maskable' },
  { size: 1200, height: 630, name: 'og-image' },
  { size: 1920, height: 1080, name: 'twitter-image' },
];

async function generatePNGs() {
  for (const config of sizes) {
    const inputPath = path.join(__dirname, '../public', `${config.name}.svg`);
    const outputPath = path.join(__dirname, '../public', `${config.name}.png`);

    try {
      await sharp(inputPath)
        .resize(config.size, config.height || config.size)
        .png()
        .toFile(outputPath);
      console.log(`Generated ${config.name}.png`);
    } catch (error) {
      console.error(`Error generating ${config.name}.png:`, error);
    }
  }
}

generatePNGs();
