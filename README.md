# Medical Chatbot

## End-to-End Medical Chatbot using Generative AI

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

---

## **Tech Stack Used**
- **Python** - Core programming language
- **LangChain** - For building LLM-based applications
- **Flask** - Web framework for API and app development
- **Pinecone** - Vector database for embedding storage
- **MistralAI** - Large Language Model provider
- **Hugging Face** - Pre-trained AI models and tools
- **HTML, CSS, JavaScript** - Frontend technologies for UI/UX

---

### **Project Overview**
This Medical Chatbot is an AI-powered system designed to assist users with medical queries. It uses **LangChain**, **MistralAI**, and **Pinecone** to retrieve and generate responses efficiently. The chatbot leverages advanced NLP models for precise and context-aware answers.

---


