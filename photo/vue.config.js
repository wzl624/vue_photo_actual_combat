module.exports = {
  devServer:{
    proxy:{
      "/api":{
        // /api->proxy->target
        //localhost:8081/api/login->
        target:"http://localhost:8081",
        pathRewrite:{
          "^/api":"",
        }
      }
    }
  }

}