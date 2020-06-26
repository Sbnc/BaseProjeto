import express from "express";
//import "@controllers/UserController";

const app = express();


app.get("/", (request, response) => {
    return response.json({message:"Olaa!"});
});


app.listen(3333);