const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
baseURL:"https://openrouter.ai/api/v1",
apiKey:process.env.OPENROUTER_API_KEY
});

app.post("/ai-suggestion", async (req,res)=>{

try{

const { task } = req.body;

const completion =
await openai.chat.completions.create({

model:"openai/gpt-3.5-turbo",

messages:[

{
role:"system",
content:
`You are an intelligent productivity assistant.

For every task provide:

1. Smart productivity suggestion
2. Priority Level
3. Estimated Completion Time
4. Suggested Deadline

Give response in clean format.`
},

{
role:"user",
content:task
}

]

});

res.json({
reply:
completion.choices[0].message.content
});

}
catch(error){

console.log(error);

res.status(500).json({
error:"AI Error"
});

}

});

app.listen(5000, ()=>{

console.log(
"AI Server Running On Port 5000"
);

});

