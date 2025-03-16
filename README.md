# Medical Chatbot

## End-to-End Medical Chatbot using Generative AI

🏥 AI-Powered Medical Chatbot 🤖💬
📌 Description
This AI-powered medical chatbot is designed to provide retrieval-based medical assistance by answering health-related queries using LangChain, Mistral AI, and Pinecone. The chatbot leverages retrieval-augmented generation (RAG) to fetch accurate and relevant medical information from a knowledge base, ensuring reliable responses to user queries.

🔥 Features
🔍 Retrieval-Augmented Generation (RAG): Enhances response accuracy by retrieving medical data from Pinecone.
🧠 Mistral AI Integration: Utilizes Mistral AI for generating medical insights.
📚 LangChain Pipelines: Implements LangChain for structured data retrieval and query processing.
💾 Pinecone Vector Database: Efficiently stores and fetches relevant medical information.
🌐 Flask Web Interface: Provides a user-friendly web-based interaction.
🩺 Medical Query Processing: Understands symptoms, diseases, and general health-related questions.

🏗️ Tech Stack
- **Python** - Core programming language
- **LangChain** - For building LLM-based applications
- **Flask** - Web framework for API and app development
- **Pinecone** - Vector database for embedding storage
- **MistralAI** - Large Language Model provider
- **Hugging Face** - Pre-trained AI models and tools
- **HTML, CSS, JavaScript** - Frontend technologies for UI/UX

🚀 How It Works
User inputs a medical query.
The chatbot retrieves relevant medical documents using Pinecone.
LangChain processes and structures the retrieved data.
Mistral AI generates a contextual response based on the retrieved information.
The chatbot presents a reliable medical response.

📌 Usage
This chatbot is designed for medical education and awareness purposes only. It does not replace professional medical consultation.

🛠️ Setup & Installation
🔹 Install dependencies using Conda:

### How to Run?

#### **Steps to Set Up and Run the Project**

#### **Step 1: Clone the Repository**
Clone the repository from GitHub:
```bash
 git clone https://github.com/your-repo-url.git
 cd your-repo-folder
```

#### **Step 2: Create and Activate a Conda Environment**
Create a virtual environment using Conda:
```bash
conda create -n llmapp python=3.8 -y
conda activate llmapp
```

#### **Step 3: Install Dependencies**
Install the required dependencies using:
```bash
pip install -r requirements.txt
```

#### **Step 4: Configure Environment Variables**
Create a `.env` file in the root directory and add your Pinecone and MistralAI credentials:
```plaintext
PINECONE_API_KEY="your_pinecone_api_key"
MISTRALAI_API_KEY="your_mistralai_api_key"
```

#### **Step 5: Store Embeddings in Pinecone**
Run the following command to store embeddings in Pinecone:
```bash
python store_index.py
```

#### **Step 6: Run the Application**
Finally, start the chatbot application:
```bash
python app.py
```

📌 Future Enhancements
✅ Integration with Hugging Face medical models
✅ Support for multilingual medical queries
✅ Interactive voice-based assistance

---

### **Project Overview**
This Medical Chatbot is an AI-powered system designed to assist users with medical queries. It uses **LangChain**, **MistralAI**, and **Pinecone** to retrieve and generate responses efficiently. The chatbot leverages advanced NLP models for precise and context-aware answers.

---


