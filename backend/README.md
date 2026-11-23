# API server

This folder contains the Python API for Soar. It uses FastAPI.

## Run it on Windows

```powershell
py -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

The server runs at <http://127.0.0.1:8000>.

## Routes

- `GET /` — basic server information
- `GET /health` — health status
- `GET /api/v1/quests` — example quest list
- `/docs` — interactive API documentation

Routes are defined as Python functions in `app/main.py`. The quest list is currently returned directly by the function; there is no database connection.
