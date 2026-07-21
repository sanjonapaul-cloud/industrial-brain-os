from sentence_transformers import SentenceTransformer


class DocumentEmbedder:

    def __init__(self):
        self.model = SentenceTransformer("BAAI/bge-small-en-v1.5")

    def embed(self, data):

        # If input is a question (string)
        if isinstance(data, str):
            return self.model.encode(data).tolist()

        # If input is a list of document chunks
        for chunk in data:
            embedding = self.model.encode(chunk["text"])
            chunk["embedding"] = embedding.tolist()

        return data