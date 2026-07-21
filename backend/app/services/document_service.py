from fastapi import UploadFile, HTTPException
from datetime import datetime
from pathlib import Path
import os
import uuid

from app.document_processor.parser import DocumentParser
from app.chunking.chunker import DocumentChunker

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

ALLOWED_EXTENSIONS = [".pdf"]

parser = DocumentParser()
chunker = DocumentChunker()


async def upload_document(file: UploadFile):

    if not file or not file.filename:
        raise HTTPException(
            status_code=400,
            detail="No file uploaded."
        )

    extension = Path(file.filename).suffix.lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported."
        )

    document_id = str(uuid.uuid4())

    stored_filename = f"{document_id}{extension}"

    file_path = Path(UPLOAD_DIR) / stored_filename

    with open(file_path, "wb") as buffer:
        buffer.write(await file.read())

    parsed_document = parser.parse(str(file_path))

    chunks = chunker.chunk(parsed_document["text"])

    return {
        "document_id": document_id,
        "original_filename": file.filename,
        "stored_filename": stored_filename,
        "size": os.path.getsize(file_path),
        "upload_time": datetime.now().isoformat(),
        "status": "PARSED",
        "page_count": parsed_document["page_count"],
        "chunk_count": len(chunks),
        "chunks": chunks
    }