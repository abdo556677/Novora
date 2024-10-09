const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// إعداد التوجيه
const webRoutes = require('./routes/web');

// إعداد محرك العرض
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'resources/views'));

// إعداد المجلد العام
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// استخدام المسارات
app.use('/', webRoutes);

// بدء الخادم
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
