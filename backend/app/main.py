"""Small FastAPI starting point for the Soar project.

Run locally from the backend directory with:
    python -m uvicorn app.main:app --reload

Routes intentionally return simple sample responses. Add real persistence and
authentication only after the project team chooses those requirements.
"""

import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Soar API",
    description="Starter API for the Walnut Hills Programming Club project.",
    version="0.1.0",
)

# Keep local browser access explicit. Add production origins through the
# CORS_ORIGINS environment variable when a deployment host is selected.
allowed_origins = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "PATCH", "DELETE"],
    allow_headers=["*"],
)


@app.get("/", tags=["general"])
def read_root() -> dict[str, str]:
    """Tell a developer the API is running and point them to its docs."""
    return {"name": "Soar API", "status": "running", "docs": "/docs"}


@app.get("/health", tags=["general"])
def health_check() -> dict[str, str]:
    """Simple health endpoint for local checks and a future hosting provider."""
    return {"status": "ok"}


@app.get("/api/v1/quests", tags=["quests"])
def list_sample_quests() -> dict[str, list[dict[str, str | int]]]:
    """Return a few examples until quest storage and assignment are designed."""
    return {
        "items": [
            {
                "id": "ask-about-their-week",
                "title": "Ask someone about their week",
                "category": "connection",
                "minutes": 5,
                "points": 10,
            },
            {
                "id": "step-outside",
                "title": "Step outside for a few minutes",
                "category": "outdoors",
                "minutes": 10,
                "points": 10,
            },
        ]
    }
