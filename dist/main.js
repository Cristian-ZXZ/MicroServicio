"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Vehicles Microservice')
        .setDescription('API for vehicle management and rental availability')
        .setVersion('1.0')
        .addTag('vehicles')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const port = 3000;
    await app.listen(port);
    console.log('Server running on http://localhost:' + port);
    console.log('Swagger available at http://localhost:' + port + '/api');
}
bootstrap();
//# sourceMappingURL=main.js.map