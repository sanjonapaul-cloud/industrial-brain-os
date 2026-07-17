from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI(
    title="Industrial Brain OS API",
    version="1.0.0",
    description="Backend API for Industrial Brain OS",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Welcome to Industrial Brain OS API"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

from fastapi import UploadFile, File

@app.post("/upload")
async def upload(file: UploadFile = File(...)):
    return {
        "message": "Upload successful",
        "filename": file.filename
    }

@app.get("/documents")
def documents():
    return {
        "documents": []
    }

@app.get("/assets")
def assets():
    return {
        "assets": []
    }