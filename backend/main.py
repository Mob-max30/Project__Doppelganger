import uuid
import time

from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from database import init_db, get_connection

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def startup():
    init_db()


class SessionStartRequest(BaseModel):
    user_agent: str
    screen_size: str
    language_context: str


@app.get("/")
def root():
    return {"status": "running"}


@app.post("/session/start")
def start_session(data: SessionStartRequest):

    session_id = str(uuid.uuid4())

    conn = get_connection()

    conn.execute(
        """
        INSERT INTO sessions (
            id,
            started_at,
            language_context
        )
        VALUES (?, ?, ?)
        """,
        (
            session_id,
            int(time.time() * 1000),
            data.language_context
        )
    )

    conn.commit()
    conn.close()

    return {
        "session_id": session_id
    }