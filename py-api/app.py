# Importing necessary libraries
from flask import Flask, request, jsonify

# Initialize Flask app
app = Flask(__name__)


# Documentation:
# This route is a basic health check to confirm that the server is running.
@app.route("/health", methods=["GET"])
def health_check():
    """
    Health Check Endpoint
    ---------------------
    Method: GET
    Returns: JSON response to indicate the server is running.
    """
    return jsonify({"status": "Server is up and running!"}), 200


# Documentation:
# This route demonstrates how to use query parameters to filter data.
# It returns filtered drinks based on the provided query.
@app.route("/drinks", methods=["GET"])
def get_drinks():
    """
    Drinks Endpoint
    ----------------
    Method: GET
    Query Params: `name` (Optional)
    Returns: List of drinks or filtered drinks based on the query parameter.
    """
    drinks = [
        {
            "id": 1,
            "name": "Pumpkin Spiced Latte",
            "ingredients": ["Pumpkin", "Spice", "Milk"],
        },
        {"id": 2, "name": "Iced Chai Latte", "ingredients": ["Tea", "Milk", "Spices"]},
        {"id": 3, "name": "Dirty Martini", "ingredients": ["Gin", "Vermouth", "Olive"]},
    ]
    name = request.args.get("name")
    if name:
        drinks = [drink for drink in drinks if name.lower() in drink["name"].lower()]
    return jsonify({"data": drinks}), 200


# Documentation:
# This route demonstrates a POST request where data is sent in the request body.
@app.route("/add-drink", methods=["POST"])
def add_drink():
    """
    Add Drink Endpoint
    -------------------
    Method: POST
    Body: JSON with `name` and `ingredients`.
    Returns: Confirmation message with the added drink details.
    """
    data = request.get_json()
    if not data or "name" not in data or "ingredients" not in data:
        return (
            jsonify(
                {"error": "Invalid input! Please provide `name` and `ingredients`."}
            ),
            400,
        )

    # Dummy response for demonstration
    new_drink = {
        "id": 4,  # In real scenarios, this would be auto-generated by the database
        "name": data["name"],
        "ingredients": data["ingredients"],
    }
    return jsonify({"message": "Drink added successfully!", "data": new_drink}), 201


# Documentation:
# This route demonstrates how to handle errors like unauthorized access (403).
@app.route("/restricted", methods=["GET"])
def restricted_area():
    """
    Restricted Area Endpoint
    -------------------------
    Method: GET
    Returns: Error message with 403 status code for unauthorized access.
    """
    return (
        jsonify(
            {"error": "Access denied. You are not authorized to view this resource."}
        ),
        403,
    )


# Run the Flask app
if __name__ == "__main__":
    """
    Run the application on the localhost (127.0.0.1) at port 5000.
    Use `debug=True` for live code reloading during development.
    """
    app.run(debug=True)
