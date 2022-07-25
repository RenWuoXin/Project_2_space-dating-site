var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//路由
app.get("/", function (req, res) {
    res.render("index");
});

// app.get('/pair', function (req, res) {
//     // add data property to about page
//     res.render('pair', { data: data.user });
// });

app.get("/pair", function (req, res) {
    let sql = "SELECT * FROM members where Gender = ? ORDER BY Rand() limit 4";
    con.query(sql, "M", function (err, result, fields) {
        if (err) console.log("query is not excuted. select fail...\n" + err);
        else res.render("pair", { data: result });
    });
});



// app.get("/pair", function (req, res) {
//     var gender = req.body.gender;
//     var minage = req.body.minage;
//     var maxage = req.body.maxage;
//     var county = req.body.county;
//     let params = [gender, county];
//     let sql = "SELECT * FROM member where Gender =? AND CityId =? ORDER BY Rand() limit 4";
//     con.query(sql, function (err, result, fields) {
//         if (err) console.log("query is not excuted. select fail...\n" + err);
//         else res.render("pair", { data: result });
//     });
// });

// app.post('/pair', function (req, res) {

//     var gender = req.body.gender;
//     var minage = req.body.minage;
//     var maxage = req.body.maxage;
//     var county = req.body.county;

//     con.connect(function (error) {
//         console.log(error);

//         var sql = "SELECT * FROM member where Gender =" + gender + " AND WHERE CityId =" + county + " ORDER BY Rand() limit 4";

//         var values = [
//             [gender, minage, maxage, county]
//         ];
//         con.query(sql, [values], function (error, result) {
//             console.log(error);
//             res.res.render("pair", { data: result });
//         })
//     });
// });
// app.get("/match", function (req, res) {
//     var gender = res.query.gender;
//     // var minage = res.query.minage;
//     // var maxage = res.query.maxage;
//     // var country = res.query.Country;
//     con.query(sql, function (err, result, fields) {
//         let sql = "SELECT * FROM member where Gender =" + gender + " ORDER BY Rand() limit 4";
//         if (err) console.log("query is not excuted. select fail...\n" + err);
//         else res.render("pair", { data: result });
//     });
// });

app.get("/chatroom", function (req, res) {
    res.render("chatroom");
});

//引用外部資料套在EJS，EX:CSS
app.use(express.static(__dirname + "/public"));

//連接MySQL
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    port: "3306",
    database: "final_project", //自行設置的資料庫
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var sql = "SELECT * FROM members ORDER BY RAND() LIMIT 3";
//查
con.query(sql, function (err, result) {
    if (err) {
        console.log("[SELECT ERROR] - ", err.message);
        return;
    }

    console.log("--------------------------SELECT----------------------------");
    console.log(result);
    console.log(
        "------------------------------------------------------------\n\n"
    );
});

//樣板引擎EJS
let engine = require("ejs-locals");
app.engine("ejs", engine);
app.set("views", "./views");
app.set("view engine", "ejs");

//聊天應用
const http = require("http");
const server = http.createServer(app); //Express 初始化為可以提供給 HTTP 伺服器的函數處理程式（如第 4 行所示）
const { Server } = require("socket.io");
const io = new Server(server);
//通過傳遞（HTTP 伺服器）物件來初始化的新實例。然後，我偵聽傳入套接字的事件並將其記錄到控制台
io.on("connection", (socket) => {
    //進入聊天
    console.log("a user connected");
    socket.on("disconnect", () => {
        //離開聊天
        console.log("user disconnected");
    });
});

//chat message
io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        console.log("message: " + msg);
        io.emit("chat message", msg);
    });
});

io.emit("some event", {
    someProperty: "some value",
    otherProperty: "other value",
}); // This will emit the event to all connected sockets

// check running enviroment
var port = process.env.PORT || 4444;

// create
server.listen(port);

// only print hint link for local enviroment
if (port === 4444) {
    console.log("RUN http://localhost:4444/");
}