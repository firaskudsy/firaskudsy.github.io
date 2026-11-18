// All home page text and data.

export const person = {
  name: 'Firas Kudsy',
  title: 'Senior Software & AI Engineer',
  location: 'Greater Toronto Area',
};

export const contact = {
  email: 'firaskudsy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/firaskudsy',
  github: 'https://github.com/firaskudsy',
};

export const copy = {
  heroTitle: 'I design and build agentic AI systems.',
  heroLead:
    'Senior software and AI engineer with over 20 years of experience across agentic systems, AI workflows, RAG, system architecture and full stack development. I write about what I learn building with AI.',
  skillsTitle: 'Skills',
  skillsIntro: 'From agents and retrieval down to the architecture, applications and data that support them.',
  notesTitle: 'Articles on building with AI',
  notesIntro: 'Short takes on agents, evals, RAG, security and engineering practice.',
  contactTitle: 'Get in touch',
  contactIntro: 'Reach me by email, or connect on LinkedIn and GitHub.',
  footerLeft: '© 2026 Firas Kudsy',
  footerRight: 'Greater Toronto Area',
};

export const heroFacts = [
  { label: 'Experience', value: 'Building software since 2002' },
  { label: 'Focus', value: 'Agentic systems, AI workflows, RAG' },
  { label: 'Based in', value: 'Greater Toronto Area' },
];

export const skillGroups = [
  {
    title: 'AI engineering',
    ai: true,
    skills: [
      {
        name: 'Agentic AI systems',
        desc: 'Design and build agents around the core reason, act and observe loop, and connect them to tools through the Model Context Protocol.',
        tools: 'Anthropic SDK, Claude Agent SDK, Claude Code, LangChain, MCP, ReAct, Python',
      },
      {
        name: 'AI workflow orchestration',
        desc: 'Build automated AI workflows in n8n and stateful, multi-step agent workflows in LangGraph.',
        tools: 'n8n, LangGraph, Python',
      },
      {
        name: 'LLMs and model hosting',
        desc: 'Integrate hosted and locally run language models into applications.',
        tools: 'Claude, OpenAI GPT models, Qwen 3.8, Ollama, Hugging Face',
      },
      {
        name: 'RAG and retrieval',
        desc: 'Build platforms that answer questions across document collections using vector search.',
        tools: 'pgvector, Pinecone, Qdrant, Chroma, LlamaIndex, Python, NestJS',
      },
      {
        name: 'Evaluation and observability',
        desc: 'Measure RAG quality, trace LLM applications, and package AI services for deployment.',
        tools: 'LangSmith, Langfuse, RAGAS, FastAPI, Docker',
      },
      {
        name: 'AI-driven delivery',
        desc: 'Apply agents across the software lifecycle: planning, stories and tickets, review, build and test.',
        tools: 'Claude, Claude Code, Node.js, CLI tooling',
      },
    ],
  },
  {
    title: 'Software engineering',
    ai: false,
    skills: [
      {
        name: 'System architecture',
        desc: 'Design system and solution architecture for enterprise tools, REST APIs and microservice integrations.',
        tools: 'REST APIs, microservices, RabbitMQ, Nginx',
      },
      {
        name: 'Full stack development',
        desc: 'Build web and mobile applications end to end, from the interface to backend services.',
        tools: 'TypeScript, JavaScript, React, Angular, Node.js, NestJS, Kotlin',
      },
      {
        name: 'Data and cloud',
        desc: 'Design data structures and stored procedures, and take applications to production in the cloud.',
        tools: 'MS SQL, MongoDB, Firebase, Azure',
      },
    ],
  },
];

export const background =
  "Building software since 2002 across Baghdad, Amman, Beirut and Toronto. Bachelor's degree in Computer Science from Baghdad University.";

export const rssPath = '/rss.xml';
