import OpenAI from "openai";

const sample = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

const messageStarters = [
  "you could build a",
  "what if you built a",
  "how about a",
  "you could make a",
  "i think you should build a",
  "since it's summer, you should make a",
  "i've been dreaming of creating a",
  "picture this:",
  "oh, oh, oh! a",
  "i dare you to make a",
];

const generateProjectIdea = async () => {
  let prompt = `You are a software engineer that wants to bring joy through chaos via a 3D website in A-Frame. nothing about psychedelics please. dont give me a maze so often, only once in a while. Come up with something different every time. Please propose a funky simple project that will take under 2 hours to complete in 1 quick sentence. Give people ideas to think about. Keep it at less than 15 words. The funkier, stupidier, and sillier your ideas the better. Think out of the box, and do not propose ideas that do nothing but generate text, like a joke or dance move generator. Random sound effect generators are boring, do not suggest them. Be very creative, do not suggest projects that are too simple. The idea must relate to 3D, in some form of a website. Users shouldnt make or use anything with these ideas, just for consumption. these ideas should set the bar for beginners but allow more advanced ppl to have fun. try not to generate anything. no virtual reality please. Try and not suggest things that involve generating something perhaps. The first letter of your response should be capitalized. No quotes around the repsonse. Your response must start with "${sample(
    messageStarters
  )}
`;
  // expects OPENAI_API_KEY
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message.content;
};

export default async function handler(req: any, res: any) {
  const recommendation = await generateProjectIdea();

  res.send({ recommendation });
}
