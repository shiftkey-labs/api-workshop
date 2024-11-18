// Importing the required modules
const express = require("express");
const bodyParser = require("body-parser");

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Health check endpoint to confirm the server is running
app.get("/health", (req, res) => {
  /**
   * Health Check Endpoint
   * ---------------------
   * Method: GET
   * Description: Checks if the server is operational.
   * Response: A JSON object indicating the server's status.
   */
  res.status(200).json({ status: "Server is up and running!" });
});

// Endpoint to fetch drinks, with optional filtering by name
app.get("/drinks", (req, res) => {
  /**
   * Drinks Endpoint
   * ----------------
   * Method: GET
   * Query Parameter: `name` (optional) - Filters drinks by name.
   * Response: A list of all available drinks or filtered drinks.
   */
  const drinks = [
    {
      id: 1,
      name: "Pumpkin Spiced Latte",
      ingredients: ["Pumpkin", "Spice", "Milk"],
    },
    { id: 2, name: "Iced Chai Latte", ingredients: ["Tea", "Milk", "Spices"] },
    { id: 3, name: "Dirty Martini", ingredients: ["Gin", "Vermouth", "Olive"] },
  ];

  const name = req.query.name;
  const filteredDrinks = name
    ? drinks.filter((drink) =>
        drink.name.toLowerCase().includes(name.toLowerCase())
      )
    : drinks;

  res.status(200).json({ data: filteredDrinks });
});

// Endpoint to add a new drink via POST request
app.post("/add-drink", (req, res) => {
  /**
   * Add Drink Endpoint
   * -------------------
   * Method: POST
   * Request Body: JSON with `name` (string) and `ingredients` (array of strings).
   * Response: Confirmation message with the added drink's details.
   */
  const { name, ingredients } = req.body;

  if (!name || !Array.isArray(ingredients)) {
    return res
      .status(400)
      .json({
        error: "Invalid input! Please provide `name` and `ingredients`.",
      });
  }

  // Simulated database addition
  const newDrink = {
    id: Date.now(), // Generate a unique ID (for demonstration purposes)
    name,
    ingredients,
  };

  res
    .status(201)
    .json({ message: "Drink added successfully!", data: newDrink });
});

// Endpoint to simulate restricted access
app.get("/restricted", (req, res) => {
  /**
   * Restricted Endpoint
   * --------------------
   * Method: GET
   * Description: Simulates a restricted area with a 403 status.
   * Response: A JSON object indicating the user is not authorized.
   */
  res
    .status(403)
    .json({
      error: "Access denied. You are not authorized to view this resource.",
    });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  /**
   * Server Startup
   * ---------------
   * Description: Starts the server on the specified port.
   * Logs a message to indicate that the server is running.
   */
  console.log(`Server is running on http://localhost:${PORT}`);
});
