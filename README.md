# APIs Workshop

This repository contains two implementations of a simple API for the "Say Hello to APIs" workshop. Both implementations demonstrate the same functionality, one using Python with Flask and the other using Node.js with Express.

---

## Project Structure

```plaintext
.
├── js-api/
│   ├── app.js        # Node.js Express API implementation
│   ├── README.md     # Instructions for running the Node.js API
├── py-api/
│   ├── app.py        # Python Flask API implementation
│   ├── README.md     # Instructions for running the Flask API
└── README.md         # Root README file (this file)
```

---

## API Features

1. **Health Check Endpoint**

   - Verifies if the server is running.

2. **Get Drinks Endpoint**

   - Retrieves a list of drinks or filters drinks based on a query parameter.

3. **Add Drink Endpoint**

   - Allows adding a new drink by sending JSON data in a `POST` request.

4. **Restricted Access Endpoint**
   - Simulates restricted access with a `403 Forbidden` response.

---

## Prerequisites

- **For Python Flask**: Python 3.7 or higher
- **For Node.js Express**: Node.js v14 or higher

---

## Quick Start Guide

### Run the Python Flask API

1. Navigate to the `py-api` directory:

   ```bash
   cd py-api
   ```

2. Follow the instructions in `py-api/README.md` to set up and run the Flask API.

### Run the Node.js Express API

1. Navigate to the `js-api` directory:

   ```bash
   cd js-api
   ```

2. Follow the instructions in `js-api/README.md` to set up and run the Express API.

---

## Testing the APIs

- Use tools like `curl` or `Postman` to test the APIs.
- Endpoints for both APIs are identical, ensuring consistent demonstration across platforms.

---

## Contributing

Feel free to fork this repository and submit pull requests to enhance or modify the APIs.

---
