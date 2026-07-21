

from dotenv import load_dotenv
from google import genai
import os


class GeminiLLM:

    def __init__(self):

        load_dotenv()

        client = genai.Client(
            api_key=os.getenv("GEMINI_API_KEY")
        )

        self.client = client

    def answer(self, question, context):

        prompt = f"""
You are an AI assistant for industrial documents.

Answer ONLY from the provided context.

If the answer is not in the context, reply exactly:

I couldn't find that information in the uploaded documents.

Context:
{context}

Question:
{question}
"""

        response = self.client.models.generate_content(
    model="gemini-3.1-flash-lite",
    contents=prompt
)

        return response.text