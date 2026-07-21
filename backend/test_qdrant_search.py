from qdrant_client import QdrantClient

client = QdrantClient(path="qdrant_data")

info = client.get_collection("documents")

print("=" * 50)
print("Collection Name:", info.config.params.vectors)
print("=" * 50)

count = client.count(
    collection_name="documents",
    exact=True
)

print("Vectors Stored:", count.count)