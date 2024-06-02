export async function POST(req: Request){
  const prompt = await req.json();

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  

    try {
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

      const result = await model.generateContent(JSON.stringify(prompt));
      const response = await result.response;
      const text = response.text();
      console.log(text);

      return new Response(text);

    } catch (error) {
      console.error('Error generating response:', error);
    }

    return new Response(JSON.stringify(prompt));

}

// export async function POST(req: Request) {
//    const prompt = await req.json()
//     try {
//       const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
//       const GPTresponse = await openai.chat.completions.create({
//         model: 'gpt-3.5-turbo',
//         messages: [
//           {
//             role: 'user',
//             content: prompt,
//           },
//         ],
//         max_tokens: 10,
//       });

//       return new Response(GPTresponse.choices[0].message.content);

//     } catch (error) {
//       console.error('Error generating response:', error);
//       res.status(700).json({ success: false, message: 'Error generating response', error: error.message });
//     }
//   } 
