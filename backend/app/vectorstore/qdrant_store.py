from qdrant_client import QdrantClient
from qdrant_client.models import Distance, VectorParams, PointStruct


class QdrantStore:

    def __init__(self):

        self.collection_name = "documents"

        self.client = QdrantClient(path="qdrant_data")

        collections = self.client.get_collections().collections
        collection_names = [c.name for c in collections]

        if self.collection_name not in collection_names:
            self.client.create_collection(
                collection_name=self.collection_name,
                vectors_config=VectorParams(
                    size=384,
                    distance=Distance.COSINE
                )
            )

    def store(self, document):

        points = []

        for chunk in document["chunks"]:

            points.append(
                PointStruct(
                    id=chunk["chunk_id"],
                    vector=chunk["embedding"],
                    payload={
                        "document_name": document["filename"],
                        "page_number": chunk["page_number"],
                        "chunk_id": chunk["chunk_id"],
                        "section_title": "",
                        "file_type": "pdf",
                        "text": chunk["text"]
                    }
                )
            )

        self.client.upsert(
            collection_name=self.collection_name,
            points=points
        )

    def search(self, query_vector, limit=5):

        response = self.client.query_points(
            collection_name=self.collection_name,
            query=query_vector,
            limit=limit
        )

        return response.points
    def close(self):
     self.client.close()