# DCXAir - Frontend

DCXAir is a frontend application developed with Angular, designed to allow users to search for flights between different origins and destinations. The available flights are fetched from a backend server and displayed in a clear and organized manner for easy viewing.

This project also includes a functionality to convert currency values using an open-source exchange rate API, which makes it easier to view the flight prices in different currencies.

## Features

- **Flight Search**: Users can input an origin and destination to search for available flights. Flights are dynamically fetched from the backend server and displayed with details such as flight number, airline, origin, destination, and price.

- **Currency Selection**: Users can select the currency in which they wish to view the flight prices. The app performs currency conversion using the [Exchange API](https://github.com/fawazahmed0/exchange-api?tab=readme-ov-file) to provide prices in the selected currency.

- **Results Display**: Flight results are shown in an organized table, including detailed information for each flight, such as flight number, airline, origin, destination, and price. The total price for the journey is also displayed for each trip type.

- **Error Handling and Loading States**: The app handles loading and error states appropriately, showing visual indicators when flights are being fetched or when an error occurs during the search.

## Prerequisites

- Node.js (v14 or higher)
- Angular CLI v 16

## Installation

Follow these steps to install and set up the project on your local machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/DanielFAdarve/DCXAir.FrontEnd
2. Navigate to the project directory:
   cd <project-directory>

3. Install dependencies:
   npm install

## How to Start

1. Start the development server by running the following command:
   ng serve

2. Open your browser and go to `http://localhost:4200/`.

The application will automatically reload if you make any changes to the source files.
