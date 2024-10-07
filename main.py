from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/h")
def home_page():
    return render_template("index.html")

@app.route("/")
def under_construction():
    return render_template("under_construction.html")


if __name__ == "__main__":
    app.run(debug=True)