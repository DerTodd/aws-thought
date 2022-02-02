//Used to get uuid of the images and return a configured params object
const { v4: uuidv4 } = require('uuid');

const params = fileName => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      Bucket: 'user-images-52fff920-da43-407d-9efb-09e7a1b05272',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer //temporary and removed by multer
    };
  
    return imageParams;
  };

  module.exports = params;