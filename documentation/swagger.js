const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Swagger Express API',
        version: '1.0.0',
        description: 'A simple Express API with Swagger documentation',
      },
      security: [
        {
          bearerAuth: [], // Defines that all endpoints need a bearer token
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT', // The format is JWT
          },
        },
      },
    },
    apis: ['./routes/*.js'], // Path to your API routes
  };
  
  const specs = swaggerJsdoc(options);
  
  module.exports = {
    specs,
    swaggerUi,
  };