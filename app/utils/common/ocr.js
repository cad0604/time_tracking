const tesseract = require("node-tesseract-ocr");
const logger = require("./logger");

const pdf2text = (path) => {};

const image2text = (path) => {
  const config = { lang: "eng", oem: 1, psm: 3 };
  try {
    const text = tesseract.recognize(path, config);
    return {
      status: "success",
      text,
    };
  } catch (error) {
    logger.error(`Error in an image OCR: ${error.message}`);
    return {
      status: "error",
    };
  }
};

module.exports = {
  image2text,
  pdf2text,
};
