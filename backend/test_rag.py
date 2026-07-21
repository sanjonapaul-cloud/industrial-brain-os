from app.rag.rag_pipeline import RAGPipeline

rag = RAGPipeline()

answer = rag.ask(
    "What is Industrial Safety Intelligence?"
)

print("=" * 60)
print(answer)

rag.close()