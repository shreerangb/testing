@app.route("/greet")
def greet():
    name = request.args.get("name")
    return f"<h1>Welcome {name}</h1>"
