# Synapse

Synapse is an AI-powered project within the Beckn framework, leveraging GPT-3.5 and cutting-edge language models to create a versatile adaptor for platforms aiming to implement the Beckn protocol. This innovative solution employs AI prompts to extract essential nouns and verbs from real-world business use cases and maps them to the standardized Beckn protocol schema. Additionally, it features a JSON transformation schema for seamless conversion, an AI-driven algorithm for mapping Beckn protocol APIs to proprietary APIs and vice versa, and a SaaS service that generates Beckn protocol-compliant JSONs for diverse use cases. Synapse essentially serves as a bridge, enabling effortless integration of proprietary APIs with the Beckn protocol through advanced AI capabilities.

## Why Synapse?

To simplify and accelerate the integration of diverse business systems with the Beckn protocol, fostering decentralized interactions and standardized communication.


## Features

- A JSON transformation schema that maps nouns and verbs from real-world use cases to beckn protocol schema and actions.
- An AI-enabled algorithm to map beckn protocol APIs to proprietary APIs and vice-versa.
- Storing the Mapping in a MongoDB database.
- A React UI for interacting with the Mapping system.

## Getting Started

To get started with Synapse, follow these steps:

1. Clone the repository: `git clone https://github.com/beckn/synapse.git`
2. Install the required dependencies. (Refer to readme of server and client directories.)
3. Run the application.


### Using Docker

**Step 1: Clone the Repository**

- Clone the repository to your local machine:

```bash
git clone [https://github.com/beckn/synapse.git](https://github.com/beckn/synapse.git)

cd synapse
```

**Step 2: Enter environment variables**

- Go to the server directory
```bash
cd ./server
```

- Open the `.env` file and update the environment values. The `OPENAI_API_KEY` is your GPT 3.5 key, and `DB_HOST` is your MongoDB atlas connection string which you can get from your MongoDB account console.
```bash
OPENAI_API_KEY = your gpt3.5 api key
DB_HOST = your mongodb atlas connection string
```

- If running on localhost then you directly go to next step, If not then please go the client directory.
```bash
cd ../client
```

- Update the server url in the .env file.
```bash
REACT_APP_SERVER_URL = your server url
```

**Step 3: Building Docker Images**

- Go back to the root directory and build the images 
```bash
cd ../
make build
```

**Step 4: Running on your local machine**

- Run the following command in the root directory
```bash
make run
```

### Docker Images Links:
**Front-end**
- [react-app](https://hub.docker.com/repository/docker/shashwatanand1801/react-app/general)

**Back-end**
- [api-server](https://hub.docker.com/repository/docker/shashwatanand1801/api-server/general)

## Documentations
 The documentation and more detailed getting started can be found in the server and client directories of the repository.

## Demo Link
[Click to see demo](https://drive.google.com/file/d/1LyfPvOt_KOYhzB47wBRpKkqzuMPSyL1v/view?usp=sharing)

## Live Demo
[Deployed Application]()

## Contributing

We welcome contributions to Synapse! If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature`.
3. Make and commit your changes: `git commit -m 'Add new feature'`.
4. Push your changes to your fork: `git push origin feature/new-feature`.
5. Create a Pull Request (PR) to the main repository.

## Contact

If you have any questions or suggestions regarding Synapse, feel free to contact us at [shashwatanand1801@gmail.com](mailto:shashwatanand1801.com).
