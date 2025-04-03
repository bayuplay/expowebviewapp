// babel.config.js
module.exports = function(api) {
  api.cache(true); // Mengaktifkan caching untuk performa Babel
  return {
    // Menggunakan preset standar yang disediakan oleh Expo
    // Preset ini sudah mencakup konfigurasi yang diperlukan untuk React Native & Expo
    presets: ['babel-preset-expo'],
    // Anda bisa menambahkan plugin Babel tambahan di sini jika diperlukan
    // plugins: []
  };
};
