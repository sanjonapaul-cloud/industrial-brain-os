from app.document_processor.processor import DocumentProcessor

processor = DocumentProcessor()

result = processor.process(
    "uploads/55f151d9-43d3-46af-8cdc-13ac357a86fa.pdf"
)

print("=" * 60)
print("Document:", result["filename"])

print("=" * 60)
print("Pages:", result["page_count"])

print("=" * 60)
print("Chunks:", len(result["chunks"]))

print("=" * 60)
print("First Chunk:")

print("Chunk ID:", result["chunks"][0]["chunk_id"])
print("Text Preview:", result["chunks"][0]["text"][:200], "...")
print("Embedding Length:", len(result["chunks"][0]["embedding"]))
print("First 10 Values:", result["chunks"][0]["embedding"][:10])