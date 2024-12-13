const path = require('path');
const fs = require('fs');
module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-import': { root: ctx.file.dirname },
    'postcss-url': [
      {
        filter: '**/fonts/Sarabun/*.ttf',
        url: function (asset) {
          const relPath = asset.pathname.substr(1);
          const absPath = path.resolve(__dirname, '../src/styles' + relPath);
          const basename = path.basename(absPath);
          const fontPath = path.resolve(__dirname, "../dist/font")
          if (!fs.existsSync(fontPath)) {
            fs.mkdirSync(fontPath);
          }
          const distPath = path.resolve(fontPath, "sarabun")
          if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath);
          }
          const destPath = path.resolve(distPath, basename);
          if (!fs.existsSync(destPath)) fs.copyFileSync(absPath, destPath);
          return `./font/sarabun/${basename}`
        },
      },
      {
        filter: '**/fonts/material-design-icons/*.*',
        url: function (asset) {
          const relPath = asset.pathname.substr(1);
          const absPath = path.resolve(__dirname, '../src/styles' + relPath);
          const basename = path.basename(absPath);
          const fontPath = path.resolve(__dirname, "../dist/font")
          if (!fs.existsSync(fontPath)) {
            fs.mkdirSync(fontPath);
          }
          const distPath = path.resolve(fontPath, "material-design-icons")
          if (!fs.existsSync(distPath)) {
            fs.mkdirSync(distPath);
          }
          const destPath = path.resolve(distPath, basename);
          if (!fs.existsSync(destPath)) fs.copyFileSync(absPath, destPath);
          return `./font/material-design-icons/${basename}`
        },
      },
    ],
    // cssnano: ctx.env === 'production' ? {} : false,
    cssnano: {},
  },
});
