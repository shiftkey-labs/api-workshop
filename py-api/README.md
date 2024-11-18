### Instructions to Run the Flask App

#### Requirements

- Python 3.7 or higher
- Flask library

#### Installation Steps

1. **Clone or Copy the Code**

   - Save the code above in a file named `app.py`.

2. **Set Up the Environment**

   - Open a terminal or command prompt.
   - Create and activate a virtual environment (optional but recommended):
     ```bash
     python -m venv venv
     source venv/bin/activate  # For Linux/Mac
     venv\Scripts\activate     # For Windows
     ```

3. **Install Flask**

   - Install Flask using pip:
     ```bash
     pip install flask
     ```

4. **Run the Flask App**
   - Start the server by running:
     ```bash
     python app.py
     ```
   - The app will run on `http://127.0.0.1:5000`.

---

#### API Endpoints

1. **Health Check**

   - **Endpoint:** `/health`
   - **Method:** `GET`
   - **Description:** Verify that the server is running.

2. **Get Drinks**

   - **Endpoint:** `/drinks`
   - **Method:** `GET`
   - **Description:** Retrieve all drinks or filter drinks by name.
   - **Example:** `http://127.0.0.1:5000/drinks?name=latte`

3. **Add a Drink**

   - **Endpoint:** `/add-drink`
   - **Method:** `POST`
   - **Description:** Add a new drink by sending JSON data.
   - **Example Body:**
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

- Use a browser or tools like `Postman` or `curl` to test the endpoints.
- Example `curl` command to test the `/health` endpoint:
  ```bash
  curl http://127.0.0.1:5000/health
  ```
