from app.retrieval.retriever import Retriever

retriever = Retriever()

results = retriever.retrieve(
    "What is Industrial Safety Intelligence?"
)

for r in results:
    print("="*60)
    print("Score:", r.score)
    print(r.payload["text"][:300])