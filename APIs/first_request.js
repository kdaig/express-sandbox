var request = require('request');
request('http://www.google.com', function(error, response, body){
   if (error){
       console.log("SOmething went wrong!");
       console.log(error);
   } else {
       if(response.statusCode == 200){
           //this worked
           console.log(body);
       }
   }
});