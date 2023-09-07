const { json } = require("sequelize")

exports.SuccessResponse= function (response,status,message,data){
    return json({response,status,message,data})
}

exports.ErrorResponse= function(response,status,err){
    return json({response,status,err})
}