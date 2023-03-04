# Food Blog App

This is a food blog app built with React and Node.js where users can review restaurants they have visited. Users can create posts either as a guest or by setting up an account.

Getting Started

## Prerequisites

* [Node.js] (https://nodejs.org/en/download/)
* [npm] (https://docs.npmjs.com/getting-started)

Installation

1. Clone the repository:
```sh
git clone https://github.com/your-username/food-blog-app.git
```
2. Install dependencies:
```sh
cd food-blog-app
npm install
```
3. Create a .env file at the root of the project with the following variables:
```sh
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
```
4. Start the server:
```sh
npm run start:server
```
5. Start the client:
```sh
npm run start:client
```
6. Open the app in your browser at http://localhost:3000.

## Features

* Users can create posts as a guest or by setting up an account
* Users can view all posts
* Users can view their own posts
* Users can edit and delete their own posts
* Users can search for posts by restaurant name, location, and rating

## Technologies Used

* React
* Node.js
* Express
* MongoDB
* Mongoose
* JWT

License

This project is licensed under the [MIT License] (https://opensource.org/license/mit/).
