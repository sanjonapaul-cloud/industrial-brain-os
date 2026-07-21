from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routers.upload import router as upload_router
from app.routers.chat import router as chat_router

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

app.include_router(upload_router)
app.include_router(chat_router)
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