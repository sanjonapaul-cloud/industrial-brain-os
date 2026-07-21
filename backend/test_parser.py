from docling.document_converter import DocumentConverter

converter = DocumentConverter()

result = converter.convert(
    "uploads/55f151d9-43d3-46af-8cdc-13ac357a86fa.pdf"
)

print("=" * 60)
print(type(result.document.pages))

print("=" * 60)
print(result.document.pages.keys())

print("=" * 60)

first_key = next(iter(result.document.pages))
print("First key:", first_key)

page = result.document.pages[first_key]

print("=" * 60)
print(type(page))

print("=" * 60)
print(page)

print("=" * 60)
print(dir(page))