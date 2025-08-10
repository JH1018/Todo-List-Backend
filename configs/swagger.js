import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Todo List API",
            version: "1.0.5",
            description: "API documentation for the Todo List System",
        },
        servers: [
            {
                url: "http://localhost:3005/toDoList/v1",
            },
        ],
    },
    apis: ["./src/**/*.routes.js"],
};
const swaggerDocs = swaggerJSDoc(options);

export { swaggerDocs, swaggerUi };