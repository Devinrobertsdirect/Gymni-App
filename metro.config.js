const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure assets are properly bundled
config.resolver.assetExts.push(
  // Adds support for additional asset types
  'png',
  'jpg',
  'jpeg',
  'gif',
  'webp'
);

module.exports = config;


