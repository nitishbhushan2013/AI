import dotenv from 'dotenv';
import {OpenAI} from 'openai';

dotenv.config(); // Load environment variables from the .env file

if (!process.env.OPENAI_API_KEY) {
    throw new Error('The OPENAI_API_KEY environment variable is missing or empty; either provide it, or instantiate the OpenAI client with an apiKey option');
  }


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Read the API key from the environment variable
  });

const messages = [
    { 
        role: "system", 
        content: "You are a helpful assistant." 
    },
    {
        role: "user",
        content: "explain Quantum Computing in brief", 
    },
]

/**
 * Challenge:
 * 1. Ask OpenAI to explain something complicated 
 *    to you. For example Quantum Computing.
 * 
 * Prompt Engineering Stretch Goals
 * - See if you can control the level of complexity of 
 *   the generated content, for example is this for 
 *   10-year-olds or college kids?
 * - See if you can control the length of the output.
 * **/ 

async function getCompletion(){
    try{
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages
        });
        console.log(completion.choices[0].message);    
    }catch(error){
        console.log('error: ',error);
    }
 } 

 getCompletion();

