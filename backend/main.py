from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import chat, contact
from config import get_settings

settings = get_settings()

app = FastAPI(
    title="Portfolio API",
    description="Backend API for Kushwanth's portfolio website",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(chat.router, tags=["AI Chat"])
app.include_router(contact.router, tags=["Contact"])


@app.get("/")
async def root():
    return {"status": "ok", "service": "portfolio-api"}


@app.get("/health")
async def health():
    return {"status": "healthy"}
