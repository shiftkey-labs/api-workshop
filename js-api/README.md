### Instructions to Run the Node.js App

#### Requirements

- Node.js (v14 or higher)
- npm (Node Package Manager)

#### Installation Steps

1. **Clone or Copy the Code**

   - Save the above code in a file named `app.js`.

2. **Initialize the Project**

   - Open a terminal or command prompt in the project directory.
   - Run the following command to initialize a `package.json` file:
     ```bash
     npm init -y
     ```

3. **Install Dependencies**

   - Install Express and Body Parser:
     ```bash
     npm install express body-parser
     ```

4. **Run the Server**
   - Start the server using:
     ```bash
     node app.js
     ```
   - The app will run on `http://localhost:5000`.

---

#### API Endpoints

1. **Health Check**

   - **Endpoint:** `/health`
   - **Method:** `GET`
   - **Description:** Verify that the server is running.

2. **Get Drinks**

   - **Endpoint:** `/drinks`
   - **Method:** `GET`
   - **Description:** Retrieve all drinks or filter by name.
   - **Example:** `http://localhost:5000/drinks?name=latte`

3. **Add a Drink**

   - **Endpoint:** `/add-drink`
   - **Method:** `POST`
   - **Description:** Add a new drink by sending JSON data.
   - **Example Request Body:**
     ```json
     {
       "name": "Mojito",
       "ingredients": ["Mint", "Lime", "Rum", "Sugar", "Soda"]
     }
     ```

4. **Restricted Access**
   - **Endpoint:** `/restricted`
   - **Method:** `GET`
   - **Description:** Simulate unauthorized access.

---

#### Testing the API

- Use tools like `Postman` or `curl` to test the endpoints.
- Example `curl` command to test the `/health` endpoint:
  ```bash
  curl http://localhost:5000/health
  ```
