const fs = require('fs');
const path = require('path');

// Liệt kê tất cả các file đã upload trong thư mục 'uploads'
const listUploadedFiles = () => {
  const uploadDir = path.join(__dirname, 'uploads');
  const files = fs.readdirSync(uploadDir);
  return files;
};

module.exports = { listUploadedFiles };
