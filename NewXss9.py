@app.route("/greet")
def greet():
    return render_template("hello.html", name=request.args.get("name"))
