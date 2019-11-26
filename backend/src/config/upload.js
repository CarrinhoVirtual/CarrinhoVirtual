const multer = require('multer');
const path = require('path');

module.exports = {
    storage : multer.diskStorage({
        destination : path.resolve(__dirname, '..', '..', 'uploads'),  //pasta q os arquivos serão salvos
        filename : (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);
            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }), //como o multer vai armazenar as imagens / arquivos da app
};