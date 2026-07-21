from app.retrieval.retriever import Retriever
from app.llm.gemini import GeminiLLM


class RAGPipeline:

    def __init__(self):
        self.retriever = Retriever()
        self.llm = GeminiLLM()

    def ask(self, question):

        results = self.retriever.retrieve(question)

        context = "\n\n".join(
            result.payload["text"]
            for result in results
        )

        print("=" * 80)

        for i, result in enumerate(results):

              print(f"\nChunk {i+1}")

              print(result.payload["text"][:700])

        print("=" * 80)

        answer = self.llm.answer(
            question,
            context
        )

        sources = []

        for result in results:
            sources.append(
                {
                    "document": result.payload["document_name"],
                    "page": result.payload["page_number"],
                    "chunk_id": result.payload["chunk_id"],
                }
            )

        return {
            "answer": answer,
            "sources": sources,
        }

    def close(self):
        self.retriever.close()