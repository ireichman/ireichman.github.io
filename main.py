import logging
from logging.handlers import RotatingFileHandler
import sys
from flask import Flask, jsonify, request
from flask_cors import CORS
import json


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




    # database_logger = setup_logger(name='database', log_file='database.log', level=logging.DEBUG)

    # Logging examples
    app_logger.info('Application started')
    app_logger.warning('This is a warning message')

    # try:
    #     # Simulating an error
    #     1 / 0
    # except Exception as error:
    #     app_logger.error(msg=f'An error occurred. \n{error}', exc_info=True)
    #
    # database_logger.debug('Database connection details')
    # database_logger.info('Database operation completed')


############## Flask Application ######################
app = Flask(__name__)


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


@app.route(rule='/api/v1/texts', methods=['GET'])
def get_texts():

    requested_text_key: str = request.args.get(key="text")
    app_logger.info(msg=f"Requested text: {requested_text_key}")
    requested_text_value: str = texts[requested_text_key]

    return requested_text_value


if __name__ == '__main__':
    texts: dict = read_json("texts")
    app.run(debug=True)