from flask import Blueprint, request, jsonify
from app.services.llm import generateResponse


chat_blueprint = Blueprint("chat", __name__)

@chat_blueprint.route("/chat", methods=["POST"])

def chat():
    data = request.get_json()

    message = data.get("message", "").strip()
    if not message:
        return jsonify({
            "message":"Message is required"}
            ),400

    response_chat = generateResponse(message)
    return jsonify({
        "message": response_chat
    }), 200