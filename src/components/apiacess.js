export async function callAPI(typer, output) {
  output = "";
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2",
        prompt: `${typer}, do not use conversational tone, keep it short, do not use heavy words, give additional information or notes about the stuff I am writing`,
      }),
    });

    if (!response.ok) throw new Error("Failed to fetch data.");

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");

    let done = false;
    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;

      if (value) {
        const chunk = decoder.decode(value, { stream: true });
        const parts = chunk.split("\n").filter(Boolean);

        for (const part of parts) {
          try {
            const json = JSON.parse(part);
            if (json.response) {
              output += json.response;
            }
          } catch (err) {
            console.error("Error parsing chunk:", err);
          }
        }
      }
    }
    return output;
  } catch (error) {
    console.error("Error calling the API:", error);
  }
}
