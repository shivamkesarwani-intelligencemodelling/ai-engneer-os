from fastapi import FastAPI

app = FastAPI(title="AI Engineer OS")


@app.get("/")
def root():
    return {
        "message": "AI Engineer OS API"
    }


@app.get("/dashboard")
def dashboard():
    return {
        "papers_read": 3,
        "projects_active": 2,
        "coding_hours": 12
    }