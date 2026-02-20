export interface Agent {
  id: string;
  agentId: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  pricePeriod: "month" | "one-time";
  features: string[];
  accentColor: "cyan" | "purple" | "pink";
  status: "available" | "coming-soon";
}

export const agents: Agent[] = [
  {
    id: "the-boss",
    agentId: "agent_1801khybfv79ekevdhby59xt1x19",
    name: "The Boss",
    tagline: "Authoritative & decisive leadership agent",
    description:
      "A commanding voice agent built for executive communication and decision-making. The Boss delivers direct, confident responses with a take-charge attitude — ideal for coaching, briefings, and leadership-driven interactions.",
    price: 59,
    pricePeriod: "month",
    features: [
      "Commanding vocal presence",
      "Executive-style communication",
      "Decision-making guidance",
      "Real-time voice interaction",
      "Low-latency responses",
    ],
    accentColor: "purple",
    status: "available",
  },
  {
    id: "cool-beans",
    agentId: "agent_0101khg530b8ejysty7v2hmjhze3",
    name: "Cool Beans",
    tagline: "Your chill AI voice companion",
    description:
      "A smooth, natural-sounding voice agent perfect for customer support, interactive demos, and conversational experiences. Cool Beans delivers a relaxed yet professional tone that puts users at ease.",
    price: 29,
    pricePeriod: "month",
    features: [
      "Natural conversational flow",
      "Real-time voice interaction",
      "Custom personality tuning",
      "Multi-language support",
      "Low-latency responses",
    ],
    accentColor: "cyan",
    status: "available",
  },
  {
    id: "nova-spark",
    agentId: "",
    name: "Nova Spark",
    tagline: "Energetic & persuasive sales agent",
    description:
      "A high-energy voice agent designed for sales conversations. Nova Spark handles objections, builds rapport, and drives conversions with natural enthusiasm.",
    price: 49,
    pricePeriod: "month",
    features: [
      "Sales optimization",
      "Objection handling",
      "CRM integration",
      "Lead qualification",
      "Custom scripts",
    ],
    accentColor: "purple",
    status: "coming-soon",
  },
  {
    id: "zen-flow",
    agentId: "",
    name: "Zen Flow",
    tagline: "Calm & empathetic support agent",
    description:
      "A soothing voice agent built for customer support. Zen Flow provides empathetic, patient responses that de-escalate issues and resolve tickets efficiently.",
    price: 39,
    pricePeriod: "month",
    features: [
      "Empathetic responses",
      "Ticket routing",
      "Knowledge base integration",
      "Sentiment analysis",
      "Escalation handling",
    ],
    accentColor: "pink",
    status: "coming-soon",
  },
];
