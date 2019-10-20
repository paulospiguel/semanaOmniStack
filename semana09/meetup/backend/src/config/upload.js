// Trabalha com upload de imagens
const multer = require("multer");
const path = require("path");

module.exports = {
  // Realiza upload de imagens
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, callback) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      // Retornando nome do arquivo
      callback(null, `${name}-${Date.now()}${ext}`);
    }
  })
};
