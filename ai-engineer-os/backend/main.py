from fastapi import FastAPI

app = FastAPI(title="AI Engineer OS")

@app.get("/")
def root():
    return {"message": "AI Engineer OS API"}