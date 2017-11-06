require('./init.js');

app.set('view engine', 'ejs');

app.use("/yatin", routes);
app.use(express.static(appRoot + "/assets"));


app.listen(process.env.port || 80, function() {
  console.log("NodeJS server is running!!");
});
