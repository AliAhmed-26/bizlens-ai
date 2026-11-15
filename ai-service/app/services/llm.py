
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an AI bussiness analyst"),
    ("human", "{question}")
])

model = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    api_version="v1beta"
    )

parser = StrOutputParser()

chain = prompt | model | parser

def generateResponse(message):
    response = chain.invoke({
        "question":message
    })
    return response

