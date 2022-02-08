# Object Relational Mapping: E-Commerece Backend

## Table of Contents
- [Description](#description)
- [What to Expect](#what-to-expect)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Links](#links)
- [Walkthrough Video](#walkthrough-video)
- [Gif](#gif)
- [Screenshots](#screenshots)
- [Credits](#credits)

## Description

This project was developed using starter code to create a back-end application for an e-commerce site that uses the command line interface (CLI) and object-relational mapping for various methods of data manipulation, storage, and retrieval when using HTTP methods with a RESTUL API.

## What to Expect

- On adding  database name, MySQL username, and MySQL password to an environment variable file
then user will be able to connect to a database using Sequelize.
- On entering schema and seed commands, a development database is created and is seeded with test data.
- WHEN user enters the command to invoke the application, then server is started and the Sequelize models are synced to the MySQL database.
- On opening API GET routes in Insomnia for categories, products, or tags, the data for each of these routes is displayed in a formatted JSON.
- On testing API POST, PUT, and DELETE routes in Insomnia, user is able to successfully create, update, and delete data in their database.

## Installation

`npm init`

`npm install mysql2`

`npm install sequelize`

`npm install dotenv`

## Usage 
  
Run the following command at the root of your project and answer the prompted questions:

`mysql -u root -p`

Enter PW when promted

`source db/schema.sql`

`exot`

`npm run seed`
  
`npm start`

## Testing

No testing is currently set up

## Technologies Used

- JavaScript
- NPM
- MySQL

## Links

- GitHub: https://github.com/sinka27/E-Commerce-ORM

- Heroku: https://e-commerce-orm.herokuapp.com

## Walkthrough Video

Please follow the link below to view a walkthrough video.

<a href="https://drive.google.com/file/d/1L0_Vxrll1TITpw4eTgfKn1_CXG6Nf9G4/view?usp=sharing" target="_blank">Click here to watch the video!</a>

## Gif

![](./assets/emptrack.gif)


## Credits

- Parul Raj
- Joe Rehfuss
- Brett Belka