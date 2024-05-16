# Serverless ExpressJS RESTful Authentication Application

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

This project is a serverless authentication service built with Express.js and MongoDB, written in TypeScript. It provides a RESTful API for user registration, authentication, and token management. The application can be deployed both locally using Docker and serverless on AWS Lambda and API Gateway.

## Features

- User registration and login
- JWT-based authentication
- Token refreshing and user logout
- Health check endpoint
- Swagger documentation for API endpoints

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Local Setup with Docker](#local-setup-with-docker)
  - [Serverless Setup on AWS](#serverless-setup-on-aws)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Swagger Documentation](#swagger-documentation)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/get-started) (for local setup)
- [Docker Compose](https://docs.docker.com/compose/install/) (for local setup)
- [Serverless Framework](https://www.serverless.com/framework/docs/getting-started/) (for AWS setup)

## Installation

### Local Setup with Docker

1. Clone the repository:
    ```sh
    git clone https://github.com/AramHovhannisyan/serverless-restful-auth.git
    cd serverless-restful-auth
    ```

2. Start the application using Docker Compose:
    ```sh
    docker-compose up
    ```

The application will be running on port `3700`.

### Serverless Setup on AWS

1. Install the Serverless Framework:
    ```sh
    npm install -g serverless
    ```

2. Build, package, and deploy the application:
    ```sh
    npm run build
    ```

To run the serverless application locally, use:
```sh
serverless offline