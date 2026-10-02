/** The content of /resume/. One file to edit; the components only read from here. */

export const person = {
  name: 'Gustavo Salgado',
  title: 'AI Engineer',
  tagline: 'I build agents that do real work.',
  sub: 'Agents in the cloud and on the desktop · tools on the server and on the client · 13+ years shipping software',
  location: 'Medellín, Colombia · remote · B2B via my LLC',
  email: 'gsalgadotoledo@gmail.com',
  github: 'https://github.com/gsalgadotoledo',
  linkedin: 'https://www.linkedin.com/in/gustavo-salgado-ai-product-manager',
  languages: 'English C2 · Spanish native',
}

/** 01 · now — the agent that reads the mail, as a trace. */
export const now = {
  role: 'AI Engineer & Product Manager',
  company: 'Revelar Technologies · Tricura Insurance Group',
  dates: 'Sep 2025 — present',
  where: 'remote',
  summary:
    'I own the product and the code of Agents Extractor: LLM agents that read broker emails, pull 30+ fields out of PDF applications, validate them against business rules and run the underwriting workflow. Hours of data entry became seconds.',
  trace: [
    ['email.received', 'broker@… · 3 PDF attachments'],
    ['dedupe.llm', 'follow-up? no → new submission'],
    ['agent.read', 'application.pdf · loss-runs.pdf · sov.pdf'],
    ['agent.extract', '32 fields · schema v4'],
    ['validate', '2 missing → ask the PDF again'],
    ['agent.extract', '32/32 · confidence 0.93'],
    ['workflow', 'intake → review · analyst assigned'],
    ['slack.notify', '#submissions · summary posted'],
    ['email.reply', 'acknowledgement sent to broker'],
    ['done', '11 s'],
  ],
  stats: [
    { value: '85–95%', label: 'extraction accuracy, 30+ fields' },
    { value: '~40%', label: 'fewer duplicates, LLM dedupe' },
    { value: '12', label: 'workflow states, rules as code' },
  ],
  bullets: [
    'LangGraph ReAct agent with a read → extract → validate → self-correct loop (Claude).',
    'FastAPI backend, React 19 admin and client portal, Gmail Pub/Sub ingestion, Slack, Stripe, Salesforce.',
    'Terraform for ECS Fargate, ALB, ECR, VPC and IAM: one command to production on AWS.',
    '12 realistic test scenarios: multi-language, contradictory data, multi-entity, bare minimum.',
  ],
  stack: 'Python · FastAPI · LangGraph · Claude · React 19 · TypeScript · Terraform · AWS ECS',
}

/** 02 · agents, two places — the runtime. */
export const agents = {
  intro:
    'Beyond one product, I build the thing underneath: an agent runtime that runs on a server, in a Lambda, or inside an Electron app on the user’s own computer. Tools execute on both sides.',
  nodes: {
    cloud: ['Node server', 'AWS Lambda', 'server tools: data, APIs, queues'],
    core: ['one contract', 'TypeScript and Python', 'same test suite'],
    desktop: ['Electron app', 'user’s machine', 'client tools: files, apps, shell'],
  },
  points: [
    ['turn state machine', 'queued → running → waiting tool · waiting user · paused → done'],
    [
      'tool calls',
      'idempotency keys, retries, timeouts; a tool with side effects never retries alone',
    ],
    ['ask the human', 'the agent pauses with a question and resumes with the answer'],
    [
      'durable events',
      'sequenced, stored, replayable from any point; ephemeral text streams on top',
    ],
    ['multi-provider', 'Anthropic, OpenAI and others behind one Models port'],
    [
      'ports and adapters',
      'Store, Bus, Queue, Models, Devices, Push: in-memory for tests, AWS for prod',
    ],
  ],
  note: 'Independent work, 2026 · private repository · happy to walk through it',
}

/** 03 · before — the stack of jobs. */
export const before = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Truelogic Software · Samsung NEXT and TMRW',
    dates: '2019 — 2025',
    where: 'remote',
    text: 'Lead frontend on two Samsung products, an innovation platform and a fintech, used by millions. Component libraries and design systems in React, Redux and Vue that cut feature delivery time ~30%. Performance work with measurable Lighthouse gains. Jest and Cypress coverage with zero critical incidents in six years.',
    stack: 'React · Redux · Vue · TypeScript · Webpack · Jest · Cypress',
  },
  {
    role: 'Senior Full Stack Developer',
    company: 'Globant · Disney, Autodesk, National Geographic',
    dates: '2016 — 2019',
    where: 'Colombia',
    text: 'A web 3D application for Autodesk with React, Redux and AWS, from design to deploy. The redesign of the National Geographic events site. Component patterns and CI/CD pipelines for a services marketplace that the whole team adopted.',
    stack: 'React · Redux · Webpack · AWS · Agile',
  },
  {
    role: 'Frontend Web Developer',
    company: 'Starbox S.A.S.',
    dates: '2012 — 2016',
    where: 'Bogotá',
    text: 'A semi-automatic booking system for gifted experiences, owned end to end. E-BOX, a custom CRM, Stargroup and the company site, in JavaScript, jQuery and Bootstrap.',
    stack: 'JavaScript · jQuery · Bootstrap · LESS · Grunt',
  },
]

/** 04 · stack — rendered as a manifest; the number is years. */
export const stack: Array<[group: string, items: Array<[name: string, years: number]>]> = [
  [
    'languages',
    [
      ['TypeScript / JavaScript', 13],
      ['Python', 5],
      ['Go', 1],
    ],
  ],
  [
    'ai',
    [
      ['Anthropic / OpenAI APIs', 2],
      ['agent runtimes, tool use, MCP', 2],
      ['LangGraph / LangChain', 2],
      ['RAG, embeddings, evals', 2],
    ],
  ],
  [
    'web',
    [
      ['React', 8],
      ['Node.js / Express / FastAPI', 8],
      ['Electron', 1],
      ['GraphQL / REST', 5],
    ],
  ],
  [
    'cloud',
    [
      ['AWS: ECS, EKS, Lambda, S3', 5],
      ['Terraform', 2],
      ['Docker, CI/CD, GitHub Actions', 5],
      ['PostgreSQL, Redis', 5],
    ],
  ],
  [
    'product',
    [
      ['product management, PRDs, roadmaps', 2],
      ['Agile / Scrum', 3],
    ],
  ],
]

/** 05 · also */
export const also = [
  {
    k: 'teaching',
    v: 'Technical instructor at Corp. Educativa Alexander von Humboldt: web development and programming for 100+ students, with real projects deployed by the end of the course.',
  },
  {
    k: 'education',
    v: 'Web and Graphic Design, Corp. Educativa Alexander von Humboldt, 2008 — 2011.',
  },
  { k: 'languages', v: 'English C2, full professional proficiency. Spanish, native.' },
  {
    k: 'how I work',
    v: 'Cloud by default, infrastructure as code, specs before code. I write the definitions, not only the pull requests.',
  },
]

export const sections = [
  ['hero', 'start'],
  ['now', 'now'],
  ['agents', 'agents'],
  ['before', 'before'],
  ['stack', 'stack'],
  ['also', 'also'],
  ['contact', 'contact'],
] as const
