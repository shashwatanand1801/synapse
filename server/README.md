# Server Side of the Mapping System

This is an Express.js project that uses Mongoose to interact with a MongoDB Atlas database and how to protect sensitive information like the MongoDB host key and Open API key using a .env file.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed 
- NPM installed
- MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
- Open API key

## Getting Started

1. Clone this repository to your local machine:
```bash
git clone https://github.com/beckn/synapse.git
```

2. Navigate to the project directory:

```
cd ./synapse/server
```

3. Install project dependencies:
```
npm install
```

4. Create a `.env` file in the project's root directory and add the following content, replacing `<your_mongodb_uri>` and `<your_open_api_key>` with your actual MongoDB Atlas URI and Open API key:

```
DB_HOST = <your_mongodb_uri>
OPENAI_API_KEY = <your_open_api_key>
```

5. Start the development server:
```
npm start
```

6. Your Express application should now be running at 
```
http://localhost:8000.
```

## Usage

### API Endpoints

This project provides the following API endpoints:

- **Endpoint 1**: API for adding a new mapping to database
  - Example request:
    ```json
    HTTP POST /server/mapping/add-mapping
    {
      "specification": New Mapping, 
      "bFile" : "specification File Name", 
      "email" : "email", 
      "bisName": "Business Name"
    }
    ```

  - Example response:
    ```json
    { 
        "success": "Mappings save in DB successfully" ,
        "mapping": New Mapping
    }
    ```

- **Endpoint 2**: API for getting all the file names.
  - Example request:
    ```
    HTTP GET /server/asset/get-all-fileName
    ```

  - Example response:
    ```json
    {
      "files": [List of file Names]
    }
    ```

### Routes

- **Route 1**: Route for adding new mapping to database
  - Example:
    ```
    http://localhost:8000/server/mapping/add-mapping
    ```

- **Route 2**: Route for getting all the file names.
  - Example:
    ```
    http://localhost:8000/server/asset/get-all-fileName
    ```

## MongoDB Atlas Setup

To set up a MongoDB Atlas database for this project, follow these steps:

1. Sign in to your MongoDB Atlas account or create one if you haven't already.

2. Create a new cluster and follow the instructions to set up your database.

3. Obtain the MongoDB Atlas URI for your cluster. Replace `<your_mongodb_uri>` in the `.env` file with this URI.

## Open API Key

If your project requires an Open API key, obtain one from the respective provider and replace `<your_open_api_key>` in the `.env` file with your actual key.

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:


## Contact

For questions or assistance, contact  `github@shashwatanand1801` or `shashwatanand1801@gmail.com`.