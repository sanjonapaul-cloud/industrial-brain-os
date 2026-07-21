from pathlib import Path
from docling.document_converter import DocumentConverter


class DocumentParser:

    def __init__(self):
        self.converter = DocumentConverter()

    def parse(self, file_path: str):

        result = self.converter.convert(file_path)

        markdown = result.document.export_to_markdown()

        return {
            "filename": Path(file_path).name,
            "text": markdown,
            "page_count": len(result.document.pages),
            "parser": "Docling"
        }