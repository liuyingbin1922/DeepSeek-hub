---
title: 🔥 We can build DeepSeek locally!
description: how we can build DeepSeek using Ollama.
date: '2025-01-26T13:14:40.737Z'
lastModified: '2025-01-27T03:24:55.263Z'
---

# 🔥 We can build DeepSeek locally!

Ollama Deep Researcher is a fully local web research assistant powered by any LLM hosted by [Ollama](https://ollama.com/search). Simply provide a topic, and it will:  

1. Generate a search query.  
2. Gather and summarize web search results.  
3. Reflect on the summary to identify knowledge gaps.  
4. Create new search queries to address those gaps.  
5. Refine the summary over user-defined cycles.  

At the end, it delivers a comprehensive markdown summary, complete with citations for all sources used.


![research-rabbit](https://github.com/user-attachments/assets/4308ee9c-abf3-4abb-9d1e-83e7c2c3f187)

## 📺 Video Tutorials

See it in action or build it yourself? Check out these helpful video tutorials:
- [Overview of Ollama Deep Researcher with R1](https://www.youtube.com/watch?v=sGUjmyfof4Q) - Load and test [DeepSeek R1](https://api-docs.deepseek.com/news/news250120).
- [Building Ollama Deep Researcher from Scratch](https://www.youtube.com/watch?v=XGuTzHoqlj8) - Overview of how this is built.


## 🚀 Quickstart

Pull a local LLM that you want to use from [Ollama](https://ollama.com/search):
```bash
ollama pull llama3.2
ollama pull deepseek-r1:8b
```

For free web search (up to 1000 requests), [you can use the Tavily API](https://tavily.com/):
```bash
export TAVILY_API_KEY=<your_tavily_api_key>
```

Clone the repository and launch the assistant with the LangGraph server:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
git clone https://github.com/langchain-ai/ollama-deep-researcher.git
cd ollama-deep-researcher
uvx --refresh --from "langgraph-cli[inmem]" --with-editable . --python 3.11 langgraph dev
```

You should see the following output and Studio will open in your browser:
> Ready!
> 
> API: http://127.0.0.1:2024
> 
> Docs: http://127.0.0.1:2024/docs
> 
> LangGraph Studio Web UI: https://smith.langchain.com/studio/?baseUrl=http://127.0.0.1:2024

Open `LangGraph Studio Web UI` via the URL in the output above. 

In the `configuration` tab:
* You can set the name of your local LLM to use with Ollama (it will by default be `llama3.2`) 
* You can set the depth of the research iterations (it will by default be `3`)

<img width="1621" alt="Screenshot 2025-01-24 at 10 08 31 PM" src="https://github.com/user-attachments/assets/7cfd0e04-28fd-4cfa-aee5-9a556d74ab21" />

Give the assistant a topic for research, and you can visualize its process!

<img width="1621" alt="Screenshot 2025-01-24 at 10 08 22 PM" src="https://github.com/user-attachments/assets/4de6bd89-4f3b-424c-a9cb-70ebd3d45c5f" />

## How it works

Ollama Deep Researcher is inspired by [IterDRAG](https://arxiv.org/html/2410.04343v1#:~:text=To%20tackle%20this%20issue%2C%20we,used%20to%20generate%20intermediate%20answers.). This approach will decompose a query into sub-queries, retrieve documents for each one, answer the sub-query, and then build on the answer by retrieving docs for the second sub-query. Here, we do similar:
- Given a user-provided topic, use a local LLM (via [Ollama](https://ollama.com/search)) to generate a web search query
- Uses a search engine (configured for [Tavily](https://www.tavily.com/)) to find relevant sources
- Uses LLM to summarize the findings from web search related to the user-provided research topic
- Then, it uses the LLM to reflect on the summary, identifying knowledge gaps
- It generates a new search query to address the knowledge gaps
- The process repeats, with the summary being iteratively updated with new information from web search
- It will repeat down the research rabbit hole 
- Runs for a configurable number of iterations (see `configuration` tab)  


Locally deploying DeepSeek as your perpetual workflow to enable continuous learning, correction, and task processing is undoubtedly a highly meaningful endeavor.

