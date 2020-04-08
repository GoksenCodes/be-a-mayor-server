"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("cities", [
      {
        userId: 1,
        name: "Amsterdam",
        imageUrl:
          "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        country: "Netherlands",
        continent: "Europe",
        description:
          "The Dutch economy was anticipated to grow 2.6% over the course of 2019; Amsterdam moved up two spots in the rankings since 2018.",
        population: 1140000,
        price: 290,
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Moscow",
        imageUrl:
          "https://images.unsplash.com/photo-1545761931-0d597948c4c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        country: "Russia",
        continent: "EuroAsia",
        description:
          "This capital sits in the largest country in the world. It continues to increase its global footprint and has the world’s most university-sponsored incubators, according to the 2019 Global Cities Index.",
        population: 12412000,
        price: 500,
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Toronto",
        imageUrl:
          "https://images.unsplash.com/photo-1526417501781-5e7e587b7686?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
        country: "Canada",
        continent: "North America",
        description:
          "It may not be as well known as its American neighbors, but Toronto is a globally important city and has North America’s third-largest stock exchange by market capitalization.",
        population: 6139000,
        price: 350,
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        name: "Melbourne",
        imageUrl:
          "https://images.unsplash.com/photo-1544418819-ce642b5fb761?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        country: "Australia",
        continent: "Australia",
        description:
          "Melbourne was ranked as the top place for international students by the 2019 Global Cities Index and continues to lead in environmental performance.",
        population: 5191000,
        price: 380,
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: "Madrid",
        imageUrl:
          "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
        country: "Spain",
        continent: "Europe",
        description:
          "A major hub for commerce in the Spanish-speaking world, Madrid is Spain’s second-largest industrial center. The city scored highly in the business-activity category in the 2019 Global Cities Index.",
        population: 6559000,
        price: 250,
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        name: "Seoul",
        imageUrl:
          "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1870&q=80",
        country: "South Korea",
        continent: "Asia",
        description:
          "South Korea’s capital continues to hold global importance. It is a major commerce hub and home to major brands, including Samsung.",
        population: 9776000,
        price: 600,
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("cities", null, {});
  },
};
