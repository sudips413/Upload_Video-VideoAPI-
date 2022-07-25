require("dotenv").config();
const cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME || 'ghfn',
    api_key: process.env.API_KEY || '252317821961778',
    api_secret: process.env.API_SECRET || 'vEuwyi2AbOsSIQzq3P535WymCuY',
});
exports.uploads = (file) => {
    return new Promise((resolve) => {
        cloudinary.uploader.upload(
            file,
            (result) => {
                resolve({ url: result.url, id: result.public_id });
            }, { resource_type: "auto" },
        );
    })
}