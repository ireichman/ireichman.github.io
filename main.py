import logging
from logging.handlers import RotatingFileHandler
import sys
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json
from flask_cors import CORS


def setup_logger(name, log_file, level=logging.INFO):

    # Creating a custom logger.
    logger = logging.getLogger(name=name)
    logger.setLevel(level=level)

    # Create formatters
    # Detailed format for file logging
    file_formatter = logging.Formatter(
        fmt='%(asctime)s - %(name)s:%(funcName)s - %(levelname)s - %(filename)s:%(lineno)d - %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S')

    # Simpler format for console
    console_formatter = logging.Formatter(fmt=
        '%(name)s:%(funcName)s - %(levelname)s - %(message)s')

    # File Handler with log rotation
    file_handler = RotatingFileHandler(
        log_file,
        maxBytes=10*1024*1024,  # 10MB
        backupCount=5
    )
    file_handler.setLevel(level)
    file_handler.setFormatter(file_formatter)

    # Console Handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(console_formatter)

    # Add handlers to the logger
    logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    return logger

# Create loggers for different components
app_logger = setup_logger(name='app', log_file='app.log', level=logging.INFO)


def main():
    pass


def read_json(which_data) -> dict:
    """
    Reading a JSON file.
    :param which_data: Could be 'texts' or 'images'.
    :return:
    """
    if which_data == "texts":
        file = "./static/assets/texts/texts.json"
    try:
        with open(file=file, mode='r') as json_file:
            data = json.load(json_file)
    except Exception as error:
        app_logger.error(msg=f"Opening {file} for reading failed with error: \n{error}")
    return data


############## Flask Application ######################
app = Flask(__name__)
CORS(app)


@app.route(rule="/")
def index_html():
    return render_template(template_name_or_list="index.html")
                                                 

@app.route(rule='/api/v1/texts/<int:id>', methods=['GET'])
def get_texts(id):
    """
    Endpoint for sending texts to the frondend.
    :return: JSON with text or error message.
    """
    app_logger.info(f"Received id: {id}")
    # requested_text_key: str = request.args.get(key="text")
    # app_logger.info(msg=f"Requested text: {requested_text_key}")
    if not id:
        app_logger.error(msg=f"Error receiving parameters. Received URL: {request.url}")
        return jsonify({"error": "Did not receive a key for text retrival."}), 400
    # requested_text_value: str = texts[requested_text_key]
    requested_text_value: str = next((item["text"] for item in texts if item["id"] == id), None)
    app_logger.info(msg=f"Returning value: {requested_text_value} for id: {id}")

    return jsonify({"text": requested_text_value}), 200


if __name__ == '__main__':
    texts: dict = read_json("texts")
    requested_text_value: str = next((item["text"] for item in texts if item["id"] == 3), None)
    print("text: ", requested_text_value)
    app.run(debug=True)