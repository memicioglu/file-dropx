const cors = require('cors');

// Cấu hình CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Cấu hình cho phép chỉ domain này
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

const applyCors = (app) => {
  app.use(cors(corsOptions));
};

module.exports = { applyCors };
