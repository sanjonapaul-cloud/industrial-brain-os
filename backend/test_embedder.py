from app.embeddings.embedder import Embedder

embedder = Embedder()

vector = embedder.embed("Industrial AI")

print(type(vector))
print(len(vector))
print(vector[:10])