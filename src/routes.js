const { Router } = require("express");
const connection = require("./database");
const { celebrate, Joi, Segments } = require("celebrate");
const routes = Router();

const UserController = require("./controllers/UserController");

routes.post("/users", UserController.create);
routes.get("/users", UserController.read);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

// routes.post(
//   "/simulator",
//   celebrate({
//     [Segments.BODY]: Joi.object().keys({
//       origin: Joi.string().required(),
//       destiny: Joi.string().required(),
//       time: Joi.number().required(),
//       plan: Joi.string().required(),
//     }),
//   }),
//   CallSimulatorController.create
// );

module.exports = routes;
