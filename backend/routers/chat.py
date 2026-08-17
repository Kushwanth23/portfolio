from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, field_validator
from openai import AsyncOpenAI, AsyncAzureOpenAI
from config import get_settings
import re

router = APIRouter()

PORTFOLIO_CONTEXT = """
You are an AI assistant for Kushwanth Chandramedasani's portfolio website.
Answer questions about his professional experience, skills, and projects concisely and professionally.

== ABOUT ==
Name: Kushwanth Chandramedasani
Title: AI & Backend Engineer
Location: Bangalore, India
Current role: Software Engineer at ValGenesis India Pvt Ltd (Sep 2024 – Present)

== SKILLS ==
- AI/LLM: Azure OpenAI, LangChain, RAG pipelines, Prompt Engineering, RAGAS, Arize Phoenix
- Backend: Python, FastAPI, REST APIs, Microservices, async programming
- Data: PostgreSQL, Redis, Vector Databases (Pinecone, Weaviate)
- Automation: Robot Framework, Selenium, pytest
- DevOps: Docker, Git

== PROJECTS ==
1. AI Smart Compare Platform
   - AI-powered regulatory document comparison using FastAPI + Azure OpenAI
   - Identifies semantic changes, generates redlined documents
   - Impact: 70% reduction in review time, 95% accuracy, 2000+ pages processed

2. Smart Gap Assessor
   - LLM-powered compliance gap analysis system
   - Maps regulatory requirements to documentation, identifies gaps
   - Impact: 60% time savings, 92% detection accuracy

3. AI Agent Evaluation Framework
   - Evaluation framework with RAGAS + Arize Phoenix + OpenTelemetry
   - Tracks faithfulness, answer relevancy, context precision
   - Impact: 45% hallucination reduction, 12+ metrics

4. Robot Framework Test Generator
   - AI-powered test case generation from requirements
   - Impact: 80% authoring time reduction, 1000+ tests generated

== EXPERIENCE ==
- Software Engineer, ValGenesis India (Sep 2024 – Present)
  Building AI document intelligence, RAG solutions, scalable microservices
- Graduate Engineer Trainee, ValGenesis India (Jan 2024 – Aug 2024)
  Automation frameworks, Robot Framework, Selenium, backend dev
- B.Tech Computer Science (2019 – 2023)

== CONTACT ==
For hiring inquiries, direct users to the Contact page at /contact.
GitHub: https://github.com/Kushwanth23

Answer in 2-4 sentences unless the question requires more detail. Be helpful and professional.
"""


class ChatMessage(BaseModel):
    role: str
    content: str

    @field_validator("role")
    @classmethod
    def validate_role(cls, v: str) -> str:
        if v not in ("user", "assistant", "system"):
            raise ValueError("Invalid role")
        return v

    @field_validator("content")
    @classmethod
    def sanitize_content(cls, v: str) -> str:
        # Limit message length
        return v[:2000]


class ChatRequest(BaseModel):
    message: str
    history: list[ChatMessage] = []

    @field_validator("message")
    @classmethod
    def sanitize_message(cls, v: str) -> str:
        return v[:1000].strip()


class ChatResponse(BaseModel):
    response: str


def _get_client():
    settings = get_settings()
    if settings.azure_openai_endpoint:
        return AsyncAzureOpenAI(
            api_key=settings.openai_api_key,
            azure_endpoint=settings.azure_openai_endpoint,
            api_version="2024-08-01-preview",
        ), settings.azure_openai_deployment
    return AsyncOpenAI(api_key=settings.openai_api_key), "gpt-4o-mini"


@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    settings = get_settings()

    if not settings.openai_api_key:
        # Return a helpful static response when no API key is configured
        return ChatResponse(
            response=(
                "I'm Kushwanth's portfolio AI assistant! The live AI is not yet configured, "
                "but I can tell you: Kushwanth is a Software Engineer specializing in AI-powered "
                "backends. He's built projects like AI Smart Compare (Azure OpenAI + FastAPI) and "
                "an AI Agent Evaluation Framework. Visit the Projects or Experience pages to learn more!"
            )
        )

    client, model = _get_client()

    # Build messages — keep last 10 exchanges to bound token usage
    recent_history = request.history[-10:]
    messages = [
        {"role": "system", "content": PORTFOLIO_CONTEXT},
        *[{"role": m.role, "content": m.content} for m in recent_history],
        {"role": "user", "content": request.message},
    ]

    try:
        completion = await client.chat.completions.create(
            model=model,
            messages=messages,  # type: ignore[arg-type]
            max_tokens=500,
            temperature=0.7,
        )
        response_text = completion.choices[0].message.content or "I couldn't generate a response. Please try again."
    except Exception as e:
        raise HTTPException(status_code=503, detail="AI service temporarily unavailable") from e

    return ChatResponse(response=response_text)
