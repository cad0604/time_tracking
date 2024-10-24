const swaggerJsDoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DigitalBrann APIs",
      description: "API endpoints for a DigitalBrann documented on swagger",
      version: "1.0.0",
    },
    components: {
      securitySchemes: {
        Authorization: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          value: "Bearer <JWT token here>",
        },
      },
    },
  },
  apis: ["./app/routes/*/*.js"],
};

const specs = swaggerJsDoc(swaggerOptions);
const options = {
  customSiteTitle: "DigitalBrann APIs",
  customCss: `
      .topbar-wrapper a {content:url(\'../assets/logo.svg\'); width:300px; height:auto;}    
      .swagger-ui .topbar a {max-width: 120px!important;}
      `,
  customfavIcon: "/assets/logo.png",
};

exports.SwaggerSpecs = specs;
exports.SwaggerOptions = options;
