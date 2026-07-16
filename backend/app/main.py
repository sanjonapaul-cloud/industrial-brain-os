from fastapi import FastAPI

app = FastAPI(
    title="Industrial Brain OS API",
    version="1.0.0",
    description="Backend API for Industrial Brain OS",
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

@app.post("/upload")
def upload():
    return {
        "message": "Upload endpoint placeholder"
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