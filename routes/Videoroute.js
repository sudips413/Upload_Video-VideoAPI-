const videoController = require("../controller/VideoController"),
    upload = require("../config/Multerconfig"),
    router = require("express").Router();

router
    .post("/postVideo", upload.videoUpload.any(), videoController.create)

module.exports = router;