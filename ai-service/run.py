from flask import Flask
from app.routes.chat import chat_blueprint

app = Flask(__name__)

app.register_blueprint(chat_blueprint)

if __name__ == "__main__":
    app.run(debug=True, port=8000)