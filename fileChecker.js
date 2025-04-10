const fs = require('fs');
const path = require('path');

// Kiểm tra nếu file đã tồn tại trong thư mục uploads
const checkIfFileExists = (filename) => {
  const filePath = path.join(__dirname, 'uploads', filename);
  return fs.existsSync(filePath);
};

module.exports = { checkIfFileExists };
