var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var dbClean = require("./routes/dbClean");

setInterval(dbClean.cleanCo2Live, 60000);
setInterval(dbClean.cleanCoLive, 60000);
setInterval(dbClean.cleanTolueneLive, 60000);
setInterval(dbClean.cleanO2Live, 60000);
setInterval(dbClean.cleanVocLive, 60000);
setInterval(dbClean.cleanH2hoLive, 60000);
setInterval(dbClean.cleanRadonLive, 60000);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
