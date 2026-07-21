from langchain_text_splitters import RecursiveCharacterTextSplitter


class DocumentChunker:

    def __init__(self, chunk_size=1000, chunk_overlap=200):
        self.splitter = RecursiveCharacterTextSplitter(
            chunk_size=chunk_size,
            chunk_overlap=chunk_overlap
        )

    def chunk(self, text: str):

        chunks = self.splitter.split_text(text)

        all_chunks = []

        for i, chunk in enumerate(chunks, start=1):
            all_chunks.append({
                "chunk_id": i,
                "document_id": None,
                "page_number": None,
                "text": chunk,
                "metadata": {}
            })

        return all_chunks
        