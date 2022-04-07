const express = require("express");
const route = express.Router();
var moment = require('moment');
const services = require("../services/render.js");
const controller = require("../controller/controller.js");
/**
 * @description Root Route
 * @method GET/
 */
route.get("/", services.homeRoutes);
/**
 * @description add users
 * @method GET/add-user
 */
route.get("/add-user", services.add_user);
/**
 * @description update users
 * @method GET/update-user
 */
route.get("/update-user", services.update_user);

//creating api
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.get("/api/users/:id", controller.find_By_Id);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);

// to use the route variable in server.js file
module.exports = route