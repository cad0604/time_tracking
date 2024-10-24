const multer = require("multer");
const path = require("path");
const fs = require("fs");

var maxSize = 50 * 1024 * 1024;

var defaultStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./uploads/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var avatarStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/avatar`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadExeciseStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/execise`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var cmdStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/service-provider/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
    cb(null, "./storage/command");
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    // req.files.push(name);
    cb(null, name);
  },
});

var DeviationStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./uploads/deviations/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});
var TenantAddressStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./uploads/tenant/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});
var FireConceptStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/building/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var FireConditionStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/building/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var NewsStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/news/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadServiceProviderStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/service-provider/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadServiceCallStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/service-call/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadYearlyControlStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./public/uploads/yearly-control/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadExerciseStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const directory_path = `./uploads/exercise/`;
    fs.mkdirSync(directory_path, { recursive: true });
    cb(null, directory_path);
  },
  filename: (req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    let name = `${Date.now()}` + ext;
    cb(null, name);
  },
});

var uploadCmdFile = multer({ storage: cmdStorage, limits: { fileSize: maxSize } });
var uploadDeviationFile = multer({ storage: DeviationStorage, limits: { fileSize: maxSize } });
var uploadTenantAddressFile = multer({ storage: TenantAddressStorage, limits: { fileSize: maxSize } });
var uploadFireConceptFile = multer({ storage: FireConceptStorage, limits: { fileSize: maxSize } });
var uploadFireConditionFile = multer({ storage: FireConditionStorage, limits: { fileSize: maxSize } });
var uploadNewsFile = multer({ storage: NewsStorage, limits: { fileSize: maxSize } });
var uploadServiceProviderFile = multer({
  storage: uploadServiceProviderStorage, limits: { fileSize: maxSize }
});
var uploadServiceCallFile = multer({ storage: uploadServiceCallStorage, limits: { fileSize: maxSize } });
var uploadYearlyControlFile = multer({ storage: uploadYearlyControlStorage, limits: { fileSize: maxSize } });
var uploadExerciseStorage = multer({ storage: uploadExerciseStorage, limits: { fileSize: maxSize } });
var uploadDefaultFile = multer({ storage: defaultStorage, limits: { fileSize: maxSize } });
var uploadAvatarFile = multer({ storage: avatarStorage, limits: { fileSize: maxSize } });

const upload = {
  uploadCmdFile,
  uploadDeviationFile,
  uploadNewsFile,
  uploadFireConceptFile,
  uploadFireConditionFile,
  uploadServiceProviderFile,
  uploadExerciseStorage,
  uploadDefaultFile,
  uploadAvatarFile,
  uploadTenantAddressFile,
  uploadServiceCallFile,
  uploadYearlyControlFile,
};

module.exports = upload;
