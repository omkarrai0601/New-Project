
const path = require("path");

const multer = require("multer");


const store = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename : function(req,file,cb) {
        let ext = path.extname(file.originalname);
        cb(null,Date.now() + ext);
    }
})




const upload = multer({
    storage:store,
    fileFilter:(req,file,callback)=>{
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpeg' 

        ) {
            callback(null,true);
        }else{
            console.log("Unsupported file type");
            callback(null,false);
        }
    },
    limits :{
        fileSize: 1024 * 1024* 5
    }

})


const newUpload = upload.fields([ 
    {name :'imgURL' , maxCount:1} ,
    { name :'Certificate' , maxCount:1} 
 ])




module.exports = upload;
