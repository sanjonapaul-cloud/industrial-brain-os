"use client";

import { useState } from "react";

type Source = {
  document: string;
  page: number;
  chunk_id: number;
};

type Message = {
  role: "user" | "assistant";
  text: string;
  sources?: Source[];
};

export default function CopilotPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  async function sendQuestion() {
  if (!question.trim()) return;

  const userQuestion = question;

  setMessages((prev) => [
    ...prev,
    {
      role: "user",
      text: userQuestion,
    },
  ]);

  setQuestion("");
  setLoading(true);

  try {
    const response = await fetch("http://127.0.0.1:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: userQuestion,
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    const data = await response.json();

    console.log("Backend response:", data);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: data.answer,
        sources: data.sources ?? [],
      },
    ]);
  } catch (error) {
    console.error("Fetch Error:", error);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        text: "Unable to connect to backend.",
      },
    ]);
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      <div>
        <h1 className="text-3xl font-bold">
          Industrial Copilot
        </h1>

        <p className="text-muted-foreground">
          AI-powered assistant for industrial knowledge.
        </p>
      </div>

      <div className="border rounded-lg p-4 h-[500px] overflow-y-auto space-y-4">

        {messages.map((message, index) => (
          <div key={index}>

            <p className="font-semibold">
              {message.role === "user" ? "You" : "AI"}
            </p>

            <div className="bg-muted rounded-md p-3">
  <p>{message.text}</p>

  {message.sources && (
    <div className="mt-3 space-y-2">

      <p className="text-sm font-semibold">
        Sources
      </p>

      {message.sources.map((source, index) => (

        <div
          key={index}
          className="border rounded-md p-2 text-sm"
        >

          <p>
            <strong>Document:</strong> {source.document}
          </p>

          <p>
            <strong>Page:</strong> {source.page}
          </p>

          <p>
            <strong>Chunk:</strong> {source.chunk_id}
          </p>

        </div>

      ))}

    </div>
  )}

</div>

          </div>
        ))}

        {loading && (
          <p>Thinking...</p>
        )}

      </div>

      <div className="flex gap-2">

        <input
          className="border rounded-md p-2 flex-1"
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button
          onClick={sendQuestion}
          className="bg-black text-white px-5 rounded-md"
        >
          Send
        </button>

      </div>

    </div>
  );
}