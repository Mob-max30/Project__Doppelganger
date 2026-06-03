import sqlite3

DB_NAME = "doppelganger.db"


def get_connection():
    return sqlite3.connect(DB_NAME)


def init_db():
    conn = get_connection()

    cursor = conn.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        started_at INTEGER,
        completed_at INTEGER,
        language_context TEXT,
        warmup_baseline_json TEXT,
        measurements_json TEXT,
        radar_json TEXT,
        confidence TEXT,
        portrait_json TEXT
    )
    """)

    conn.commit()
    conn.close()