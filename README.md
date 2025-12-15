#  Vehicles Microservice (NodeJS / NestJS)

##  Descripción general

Este proyecto corresponde a un **microservicio de vehículos** desarrollado con **NodeJS y NestJS**, cuyo objetivo es administrar la información de los vehículos y controlar su **disponibilidad para alquiler**.

El microservicio expone una **API REST documentada con Swagger**, la cual puede ser consumida por otros sistemas (por ejemplo, un backend en **C#**) sin necesidad de conocer la implementación interna.

---

##  Arquitectura y enfoque

El sistema sigue el principio de **microservicios**, donde cada servicio tiene una responsabilidad clara.

###  Responsabilidad del microservicio

* Registrar vehículos
* Buscar vehículos por placa
* Actualizar información del vehículo
* Eliminar vehículos
* Consultar disponibilidad
* Marcar un vehículo como alquilado
* Marcar un vehículo como devuelto

 Este microservicio **no maneja**:

* Usuarios
* Pagos
* Contratos de alquiler

---

##  Tecnologías utilizadas

* **NodeJS**
* **NestJS**
* **TypeScript**
* **Swagger (OpenAPI)**
* **class-validator**

---

##  Estructura del proyecto

```
src/
 ├── vehicles/
 │    ├── dto/
 │    │    ├── create-vehicle.dto.ts
 │    │    └── update-vehicle.dto.ts
 │    ├── entities/
 │    │    └── vehicle.entity.ts
 │    ├── vehicles.controller.ts
 │    ├── vehicles.service.ts
 │    └── vehicles.module.ts
 ├── app.module.ts
 └── main.ts
```

---

##  Lógica del microservicio

###  Service (`vehicles.service.ts`)

Contiene toda la lógica de negocio:

* CRUD de vehículos
* Validación de existencia por placa
* Control de disponibilidad
* Acciones de alquiler y devolución

El estado de disponibilidad **solo puede modificarse mediante acciones**, evitando inconsistencias.

---

###  Controller (`vehicles.controller.ts`)

Define los endpoints REST y actúa como intermediario entre el cliente y la lógica de negocio.

Los endpoints están organizados en:

* **CRUD básico**
* **Acciones de negocio (alquiler)**

---

##  Endpoints disponibles

###  CRUD de vehículos

| Método | Endpoint           | Descripción         |
| ------ | ------------------ | ------------------- |
| POST   | `/vehicles`        | Crear vehículo      |
| GET    | `/vehicles/:plate` | Buscar por placa    |
| PUT    | `/vehicles/:plate` | Actualizar vehículo |
| DELETE | `/vehicles/:plate` | Eliminar vehículo   |

###  Disponibilidad y alquiler

| Método | Endpoint                        | Descripción        |
| ------ | ------------------------------- | ------------------ |
| GET    | `/vehicles/:plate/availability` | Ver disponibilidad |
| POST   | `/vehicles/:plate/rent`         | Alquilar vehículo  |
| POST   | `/vehicles/:plate/return`       | Devolver vehículo  |

---

##  Documentación con Swagger

Se integró **Swagger** para documentar la API y facilitar su consumo.

###  Acceso a Swagger

Una vez iniciado el servidor, Swagger está disponible en:

```
http://localhost:3000/api
```

###  Mensaje al iniciar el servidor

Al arrancar la aplicación, se muestran los enlaces en consola:

```
 Server running on http://localhost:3000
 Swagger available at http://localhost:3000/api
```

---

##  Pruebas

Swagger permite:

* Probar todos los endpoints
* Enviar cuerpos de solicitud (JSON)
* Ver respuestas y códigos HTTP

No es necesario usar herramientas externas como Postman.

---

##  Consumo desde otros sistemas

Este microservicio está diseñado para ser consumido por otros backends, por ejemplo:

* Un sistema de alquiler en **C#**
* Un frontend web o móvil

La comunicación se realiza mediante **HTTP REST**, manteniendo el sistema desacoplado.

---

##  Beneficios del diseño

* Separación clara de responsabilidades
* Escalable
* Fácil de mantener
* Profesional y alineado con prácticas reales
* Documentación automática

---

##  Próximos pasos posibles

* Persistencia con base de datos (PostgreSQL)
* Dockerización del microservicio
* Autenticación y autorización
* Versionado de la API

---

##  Conclusión

El microservicio de vehículos cumple con los principios de arquitectura moderna, ofreciendo una API clara, documentada y lista para integrarse en un sistema de alquiler de vehículos a mayor escala.
