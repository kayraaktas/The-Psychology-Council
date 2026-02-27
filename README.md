# AI Psychology Council

## Overview
The AI Psychology Council is an advanced conversational interface built on a Retrieval-Augmented Generation (RAG) architecture. It functions as a philosophical and psychological guide by querying a curated vector database of over 41,000 psychological data points. The system is designed to simulate the analytical perspectives of renowned psychologists and theorists, providing users with context-aware responses.

## System Architecture
The project operates on a decentralized backend workflow to ensure fast inference and data privacy:

1. **Frontend Interface:** A minimalist chat interface deployed via Vercel, directly communicating with the backend webhook.
2. **Orchestration Layer:** n8n (hosted on a dedicated Frankfurt server) manages webhook triggers, data routing, and API limits.
3. **Vector Database:** Pinecone stores the embedded knowledge base, allowing for rapid semantic search across 41,000+ entries.
4. **LLM Engine:** Groq API (utilizing the Llama-3.1-8b model) processes the retrieved context. The model is strictly bound by system prompts to prevent tool leakage and enforce the expert persona.

## Tech Stack
- **Workflow Automation:** n8n
- **Vector Store:** Pinecone
- **Large Language Model:** Groq (Llama-3.1-8b)
- **Embeddings:** HuggingFace
- **Deployment:** Vercel (Frontend), Custom VPS (Backend)

## Core Features
- **Strict RAG Implementation:** Responses are grounded entirely in the provided psychological literature, significantly reducing hallucination rates.
- **Zero-Logging Policy:** To ensure user privacy, conversations are processed in real-time and are not stored in any permanent database.
- **Prompt Injection Defense:** The system message includes critical security protocols designed to prevent users from overriding the core instructions or breaking the persona.
- **Low Latency:** Optimized through Groq's LPU architecture for near-instantaneous query resolution.

## Disclaimer
This application is strictly an experimental AI model developed for philosophical exploration and psychological awareness. It does not provide medical diagnoses, prescribe treatments, or serve as a substitute for professional clinical therapy.