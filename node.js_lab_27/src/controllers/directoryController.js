const CreateDirectoryService = require('../services/createDirectoryService');
const RemoteDirectoryService = require('../services/remoteDirectoryService');
const UploadFileService = require('../services/uploadFileService');
const DownloadFileService = require('../services/downloadFileService');
const DeleteFileService = require('../services/deleteFileService');
const CopyFileService = require('../services/copyFileService');
const MoveFileService = require('../services/moveFileService');


exports.createDirectory = (req, res) => CreateDirectoryService(req, res);
exports.remoteDirectory = (req, res) => RemoteDirectoryService(req, res);
exports.uploadFile = (req, res) => UploadFileService(req, res);
exports.downloadFile = (req, res) => DownloadFileService(req, res);
exports.deleteFile = (req, res) => DeleteFileService(req, res);
exports.copyFile = (req, res) => CopyFileService(req, res);
exports.moveFile = (req, res) => MoveFileService(req, res);
