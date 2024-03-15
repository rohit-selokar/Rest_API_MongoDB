# Product Search, Sorting, and Pagination REST API

This project aims to create a REST API for searching, sorting, and pagination of products. The API will provide endpoints to search for products, sort the results based on certain criteria, and paginate through the results to improve performance and user experience.

## Features

- **Product Search**: Users can search for products based on various criteria such as name, category, price range, etc.
- **Sorting**: Users can sort the search results based on different fields such as price, name, category, etc., in ascending or descending order.
- **Pagination**: To handle large sets of data, the API supports pagination to retrieve a subset of search results at a time.

## Technologies Used

- **Node.js**: JavaScript runtime for building the server-side application.
- **Express.js**: Web application framework for Node.js used to build the REST API.
- **MongoDB**: NoSQL database used to store product data.
- **Mongoose**: MongoDB object modeling tool used to simplify interactions with MongoDB.
- **Postman**: API development and testing tool used to test the endpoints.


## Usage

- Use Postman to send requests to the following endpoints:
  - `/products/search`: Search for products based on criteria like name, category, price range, etc.
  - `/products/sort`: Sort the search results based on different fields and sorting order.
  - `/products/paginate`: Paginate through the search results to retrieve a subset of data at a time.

