var mongoose= require("mongoose");
var Schema = mongoose.Schema;

var img_schema= new Schema({
    title: {type: String, require: false},
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    extension: { type: String, require: true}
});
var imagenes= mongoose.model("Imagenes",img_schema);
module.exports= Imagenes;