export async function semanticSearch(query, products) {
  if (!API_KEY) {
    console.error("Groq API key is missing");
    return [];
  }

  const productContext = products.map(p => ({
    id: p.id,
    title: p.title,
    description: (p.fullDescription || p.subtitle || "").substring(0, 150),
    category: p.category,
    brand: p.brand
  }));

  const systemPrompt = `
    You are an expert e-commerce search assistant. 
    Task: Identify product IDs that match the user's intent.
    Output: Return a JSON object with a single key "ids" containing an array of matching product IDs from the provided list.
    Rules:
    1. Only use IDs from the provided list.
    2. Rank them by relevance.
    3. If no matches, return {"ids": []}.
    4. MUST return valid JSON.

    Products:
    ${JSON.stringify(productContext)}
  `;

  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama3-8b-8192", // Using a faster model for search
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Query: "${query}"` }
        ],
        temperature: 0,
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) throw new Error(`API error: ${response.status}`);
    
    const data = await response.json();
    const rawContent = data.choices[0].message.content;
    const content = JSON.parse(rawContent);
    
    // Robust extraction
    const ids = content.ids || content.productIds || content.results || (Array.isArray(content) ? content : []);
    
    console.log("AI Search Results:", ids);
    return Array.isArray(ids) ? ids : [];
  } catch (error) {
    console.error("Error in AI search:", error);
    return []; // Return empty instead of null to prevent infinite loading or crashes
  }
}
