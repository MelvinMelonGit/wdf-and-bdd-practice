var dbConfig = require("./databaseConfig");
var config = require("../config/config");
var jwt = require('jsonwebtoken');

var userDB = {

    loginUser: function (email,password, callback) {
        
        var dbConn = dbConfig.getConnection();
        dbConn.connect(function (err) {
            if (err) {
                console.log(err);
                return callback(err,null);
            }
            else {
                console.log("Connected!");
        
                var sql = 'select * from user where email=? and password=?';
        
                dbConn.query(sql, [email,password], function (err, result) {
                    dbConn.end();
                            
                    if (err) {
                        console.log(err);
                        return callback(err,null);
                        
                                
                    } else {
        
                        var msg="{\"result\":\""+result.length+"\"}";               
                        
                        //created data object for frontend consumption
                        var data={
                            token: "",
                            userid: result[0].userID,
                            role: result[0].role,
                            expiresIn: 43200
                        };

                        if(result.length==1) {
                            data.token=jwt.sign({"userid":data.userid,"role": data.role}, config.secretKey, {expiresIn: data.expiresIn});
                            console.log("logged in");
                        }

                        msg={"Login": "Success"};

                        console.log(result.length, data);

                        return callback(null, data);
                        
        
                    }
                });
        
            }
        
        });
    }
}

module.exports = userDB;