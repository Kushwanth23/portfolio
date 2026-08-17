from fastapi import APIRouter
from pydantic import BaseModel, EmailStr, field_validator

router = APIRouter()


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

    @field_validator("name", "subject", "message")
    @classmethod
    def sanitize_fields(cls, v: str) -> str:
        # Strip excessive whitespace and limit length
        return v.strip()[:500]

    @field_validator("message")
    @classmethod
    def validate_message_length(cls, v: str) -> str:
        if len(v) < 10:
            raise ValueError("Message is too short")
        return v


class ContactResponse(BaseModel):
    success: bool
    message: str


@router.post("/contact", response_model=ContactResponse)
async def contact(request: ContactRequest):
    """
    Receives contact form submissions.
    In production, integrate with SendGrid, Resend, or SMTP here.
    """
    # Log the contact (replace with email sending in production)
    print(
        f"[CONTACT] From: {request.name} <{request.email}>\n"
        f"Subject: {request.subject}\n"
        f"Message: {request.message[:200]}..."
    )

    return ContactResponse(
        success=True,
        message="Thank you! I'll get back to you within 24 hours.",
    )
