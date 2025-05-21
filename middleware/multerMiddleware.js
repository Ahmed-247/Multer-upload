import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./uploads");
    },
    filename: (req, file, cb) =>{
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb( "please upload png jpg or jpeg")
        }
        cb(null, Date.now()+"-"+file.originalname)
    },
})

const upload = multer({storage});

export default upload;