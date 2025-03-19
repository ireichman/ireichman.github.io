import logging
from logging.handlers import RotatingFileHandler
import sys
from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import json

def setup_logger(name, log_file, level=logging.INFO):
    """
    Logging boilerplate.
    :param name: Application's name.
    :param log_file: Log file path and name.
    :param level: Logging level. Defaults to INFO.
    :return: Returns logger object.
    """
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
    # file_handler = RotatingFileHandler(
    #     log_file,
    #     maxBytes=10*1024*1024,  # 10MB
    #     backupCount=5
    # )
    # file_handler.setLevel(level)
    # file_handler.setFormatter(file_formatter)

    # Console Handler
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(level)
    console_handler.setFormatter(console_formatter)

    # Add handlers to the logger
    # logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    return logger

# Create loggers for different components
app_logger = setup_logger(name='app', log_file='app.log', level=logging.INFO)


def read_json(which_data) -> dict:
    """
    Reading a JSON file.
    :param which_data: Could be 'texts' or 'images'.
    :return: Dictionary of the JSON file.
    """
    if which_data == "texts":
        file = "./api/static/assets/texts/texts.json"
    else:
        app_logger.error(f"Could not find JSON file for {which_data}")
        sys.exit(1)
    try:
        with open(file=file, mode='r') as json_file:
            data = json.load(json_file)
    except Exception as error:
        app_logger.error(msg=f"Opening {file} for reading failed with error: \n{error}")
    return data


############## Flask Application ######################
app = Flask(__name__)
CORS(app, resources={r"/api/v1/*": {"origins": [

    "*"
]}})


@app.route(rule="/")
def index_html():
    return render_template(template_name_or_list="index.html")
                                                 

@app.route(rule='/api/v1/texts/<int:json_id>', methods=['GET'])
def get_texts(json_id):
    """
    Endpoint for sending texts to the frondend.
    :return: JSON with text or error message.
    """
    app_logger.info(f"Received id: {json_id}")

    if not json_id:
        app_logger.error(msg=f"Error receiving parameters. Received URL: {request.url}")
        return jsonify({"error": "Did not receive a key for text retrival."}), 400

    requested_text_value: str = next((item["text"] for item in texts if item["id"] == json_id), None)
    app_logger.info(msg=f"Returning value: {requested_text_value} for id: {json_id}")

    return jsonify({"text": requested_text_value}), 200

texts: dict = read_json("texts")
# if __name__ == '__main__':
# Read texts.json.
# app.run(host="0.0.0.0", port=8000, debug=True)
