from app.document_processor.parser import DocumentParser
from app.chunking.chunker import DocumentChunker
from app.embeddings.embedder import DocumentEmbedder
from app.vectorstore.qdrant_store import QdrantStore


class DocumentProcessor:

    def __init__(self):
       self.parser = DocumentParser()
       self.chunker = DocumentChunker()
       self.embedder = DocumentEmbedder()
       self.store = QdrantStore()

    def process(self, file_path: str):

        document = self.parser.parse(file_path)

        chunks = self.chunker.chunk(document["text"])

        chunks = self.embedder.embed(chunks)

        document["chunks"] = chunks

        self.store.store(document)

        return document
    def close(self):
     self.store.close()