// Giả sử bạn đang sử dụng MongoDB để lưu trữ thông tin file
const mongoose = require('mongoose');

// Định nghĩa schema cho Metadata File
const fileMetadataSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  fileUrl: { type: String, required: true },
});

const FileMetadata = mongoose.model('FileMetadata', fileMetadataSchema);

// Lưu metadata file vào cơ sở dữ liệu
const saveFileMetadata = async (filename, fileUrl) => {
  const fileMetadata = new FileMetadata({
    filename,
    fileUrl,
  });
  await fileMetadata.save();
};

module.exports = { saveFileMetadata };
