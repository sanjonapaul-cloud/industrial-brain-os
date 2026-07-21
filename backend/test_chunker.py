from pathlib import Path

from app.document_processor.parser import DocumentParser
from app.chunking.chunker import DocumentChunker

uploads = Path("uploads")

pdf = list(uploads.glob("*.pdf"))[0]

parser = DocumentParser()

parsed = parser.parse(str(pdf))

chunker = DocumentChunker()

chunks = chunker.chunk(parsed["text"])

print(f"Total Chunks: {len(chunks)}")

print()

print(chunks[0])