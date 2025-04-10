const fs = require('fs');
const path = require('path');

// Xóa file sau thời gian quy định
const deleteFileAfterDuration = (filename, durationInMillis) => {
  setTimeout(() => {
    const filePath = path.join(__dirname, 'uploads', filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`File ${filename} has been deleted.`);
    }
  }, durationInMillis);
};

module.exports = { deleteFileAfterDuration };
