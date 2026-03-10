# The Psychology Council - Enterprise RAG Application

<br>

https://github.com/kayraaktas/The-Psychology-Council/raw/main/demo.mp4

<br>
<div align="center">
<i>Watch the full demonstration of the zero-logging architecture and academic AI in action.</i>
</div>

An end-to-end, serverless Retrieval-Augmented Generation (RAG) platform designed to provide expert psychological and philosophical consultation relying strictly on authorized, curated academic literature.

## Architecture Overview

The system architecture bridges a high-performance **Vercel** frontend with a robust, zero-logging **n8n** backend orchestration layer.

*   **Frontend (Vercel):** A responsive, full-screen chat interface built with native HTML/JS traversing modern CSS configurations. Embedded rate-limiters protect against concurrent SPAM logic and API exhaustion, while dynamic `SessionID` generation prevents context-bleeding across concurrent users.
*   **Orchestration (n8n):** Handles all Webhook routing, memory window buffering, payload stripping, and conversational agent logic through custom secure endpoints mapping natively to Vercel. 
*   **Vector Database (Pinecone):** Academic research documents synchronized from Google Drive into a secure high-dimensional vector store, chunked for context-preservation.
*   **LLM & Embeddings:** Powered by DeepSeek conversational models coupled with HuggingFace embedding protocols to interpret context accurately without hallucinations.

## Key Features

*   **100% Zero-Logging Principle:** Designed from the ground up for strict data privacy. The system utilizes real-time `SessionID` allocation for temporary contextual memory and clears history proactively. No persistent external db storage logs user queries.
*   **Direct Source Citation:** The conversational agent is strictly constrained to the metadata available within the Pinecone cluster, automatically citing author documents to prevent hallucination.
*   **Secure Stateless Webhooks:** Headless architecture enforcing API `Bearer` tokens on all outbound frontend fetch requests towards the n8n logic node.
*   **Rate-Limiting Logic:** Front-end event listener constraints preventing API flood attacks.

## Environment configuration

To execute this architecture locally, the n8n backend requires:
*   A deployed Pinecone index named `psikoloji`.
*   An n8n Webhook node running authenticated via Header Key `Authorization: Bearer <token>`.
*   DeepSeek Chat / API credentials registered within the workflow.

## Legal Disclaimer

*The platform functions strictly as an academic and philosophical discussion simulation. It never provides medical diagnoses, prescribes treatments, or replaces professional medical consultation.*