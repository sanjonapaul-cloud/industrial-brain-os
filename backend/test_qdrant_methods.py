from qdrant_client import QdrantClient

client = QdrantClient(path="qdrant_data")

print(hasattr(client, "search"))
print(hasattr(client, "query_points"))
print(dir(client))