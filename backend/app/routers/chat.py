
from fastapi import APIRouter

from app.models.chat import ChatRequest
from app.rag.rag_pipeline import RAGPipeline

router = APIRouter()

rag = RAGPipeline()


@router.post("/chat")
def chat(request: ChatRequest):
    return rag.ask(request.question)