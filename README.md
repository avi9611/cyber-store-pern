# Cyber Store - Gaming Tools E-commerce

Cyber Store is a simple e-commerce platform designed for gaming enthusiasts. It offers a collection of gaming tools like laptops, monitors, gaming headsets, keyboards, and other high-performance peripherals, including ROG products. The application enables users to perform basic CRUD operations to manage product listings.

## Features
- **Product Management**: Add, update, delete, and list gaming products.
- **Authentication & Security**:
  - Rate Limiting to prevent excessive requests.
  - Bot Detection for enhanced security.
- **State Management**: Global state management using Zustand.
- **Error Handling**: Proper error handling implemented on both server and client sides.

## Tech Stack
- **Frontend**: React.js, Material UI, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **State Management**: Zustand
- **Security Features**: Rate Limiting, Bot Detection

## Demo Images
![App Screenshot](taskmanager1.png)
![App Screenshot](taskmanager2.png)
![App Screenshot](taskmanager3.png)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js
- PostgreSQL

### Steps to Run the Project
1. **Clone the repository**:
   ```sh
   git clone https://github.com/avi9611/cyber-store-pern.git
   cd cyber-store-pern
   ```
2. **Install dependencies**:
   ```sh
   npm install
   ```
3. **Set up the database**:
   - Create a PostgreSQL database.
   - Configure the database connection in the `.env` file.
4. **Run the server**:
   ```sh
   npm run server
   ```
5. **Start the client**:
   ```sh
   npm run client
   ```

## Project Structure
```
cyber-store-pern/
├── client/       # Frontend React application
├── server/       # Backend API with Express
├── db/           # PostgreSQL database configuration
├── public/       # Static assets
├── .env          # Environment variables
├── package.json  # Dependencies and scripts
└── README.md     # Project documentation
```

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

## License
This project is open-source and available under the [MIT License](LICENSE).

