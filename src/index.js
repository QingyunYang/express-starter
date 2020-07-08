import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import swaggerGenerator from "express-swagger-generator";
import userRouter from "./api/user";

dotenv.config();

const app = express();

const swagger = swaggerGenerator(app);
const options = {
  swaggerDefinition: {
    info: {
      description: "express-starter接口文档",
      title: "接口文档",
      version: "1.0.0",
    },
    host: "localhost:3000",
    basePath: "/api",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "Authorization",
        description: "",
      },
    },
  },
  basedir: __dirname, //app absolute path
  files: ["./api/**/*.js"], //Path to the API handle folder
};
swagger(options);

app.use(cors());
app.use(bodyParser.json());

app.use("/api/user", userRouter);

app.listen(process.env.PORT, () => {
  const message = `server is started on port ${process.env.PORT}`;
  console.log(message);
});
