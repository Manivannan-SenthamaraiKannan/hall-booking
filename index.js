import express from 'express';
import * as dotenv from 'dotenv'

const app = express();
dotenv.config()
app.use(express.json());

const PORT = 4000;

const room =
    [
        {
            "room": "executive",
            "seats": 5,
            "price_per_hour": 120
        },
        {
            "room": "deluxe",
            "seats": 5,
            "price_per_hour": 320
        },
        {
            "room": "suite",
            "seats": 5,
            "price_per_hour": 520
        }
    ]


const bookroom1 = [
    {
        "customer_name": "niranjan",
        "date": "12/05/2023",
        "start-time": "05:30hrs",
        "end-time": "7:00hrs",
        "room_name": "deluxe"
    }
]

const bookroom2 = [

    {
        "customer_name": "pick",
        "date": "11/05/2023",
        "start-time": "12:00hrs",
        "end-time": "5:00hrs",
        "room_name": "suite"
    }
]


//  http://localhost:4000/
app.get("/", function (request, response) {
    response.send(room);
});


//  http://localhost:4000/createroom
app.post("/createroom", function (request, response) {
    room.push((request.body))
    response.send(room);
    console.log("room created")
});


//  http://localhost:4000/bookroom1
app.post("/bookroom1",function (request, response) {
    if (bookroom1.length < 5) {
        bookroom1.push((request.body))
        response.send(bookroom1);
        console.log("room booked")
    } else {
        response.send({ message: "sold out" })
    }

});


//  http://localhost:4000/bookroom2
app.post("/bookroom2", express.json(), function (request, response) {
    if (bookroom2.length < 5) {
        bookroom2.push((request.body))
        response.send(bookroom2);
        console.log("room booked")
    } else {
        response.send({ message: "sold out" })
    }

});

//  http://localhost:4000/bookeddata
app.get("/bookeddata", function (request, response) {
    response.send([(bookroom1), (bookroom2)]);
});



//  http://localhost:4000/bookedcustomers
app.get("/bookedcustomers", function (request, response) {
    response.send([(bookroom1), (bookroom2)]);
});



app.listen(PORT, () => console.log(`The server started in: ${PORT}`));