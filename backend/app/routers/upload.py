from fastapi import APIRouter, UploadFile, File
from app.services.document_service import upload_document

router = APIRouter()


@router.post("/upload")
async def upload(file: UploadFile = File(...)):
    return await upload_document(file)