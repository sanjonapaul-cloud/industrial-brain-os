from app.embeddings.embedder import DocumentEmbedder
from app.vectorstore.qdrant_store import QdrantStore


class Retriever:

    def __init__(self):
        self.embedder = DocumentEmbedder()
        self.store = QdrantStore()

    def retrieve(self, question, top_k=5):

        query_vector = self.embedder.embed(question)

        results = self.store.search(
            query_vector=query_vector,
            limit=top_k
        )

        return results
    def close(self):
      self.store.close()