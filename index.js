var PORT = 3010;
var app = require('./app.js');


app.listen(PORT, function (err) {
  if (err) {
    console.log('An error occurred starting the app');
    console.error(err);
  } else {
    console.log('----\n==> 🌎 Todo API is running on port %s', PORT);
  }
});
