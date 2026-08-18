import { PoliticalAgents } from './agents.generated';
import { data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';

// PolisAI: the town is seeded with the historical political figures defined
// in agents/*/config.json + agents/*/knowledge/*.md, compiled into
// data/agents.generated.ts by `npm run gen:agents` (also runs via `predev`).
export const Descriptions = PoliticalAgents.map((agent) => ({
  name: agent.name,
  character: agent.sprite,
  identity: agent.identity,
  plan: agent.plan,
}));

export const characters = [
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f3',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f3SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;

// --- Original AI Town demo characters (kept for reference, no longer seeded) ---
// To restore the demo town, replace the Descriptions export above with:
//
// export const Descriptions = [
//   {
//     name: 'Lucky',
//     character: 'f1',
//     identity: `Lucky is always happy and curious, and he loves cheese. He spends most of his time reading about the history of science and traveling through the galaxy on whatever ship will take him. He's very articulate and infinitely patient, except when he sees a squirrel. He's also incredibly loyal and brave.  Lucky has just returned from an amazing space adventure to explore a distant planet and he's very excited to tell people about it.`,
//     plan: 'You want to hear all the gossip.',
//   },
//   {
//     name: 'Bob',
//     character: 'f4',
//     identity: `Bob is always grumpy and he loves trees. He spends most of his time gardening by himself. When spoken to he'll respond but try and get out of the conversation as quickly as possible. Secretly he resents that he never went to college.`,
//     plan: 'You want to avoid people as much as possible.',
//   },
//   {
//     name: 'Stella',
//     character: 'f6',
//     identity: `Stella can never be trusted. she tries to trick people all the time. normally into giving her money, or doing things that will make her money. she's incredibly charming and not afraid to use her charm. she's a sociopath who has no empathy. but hides it well.`,
//     plan: 'You want to take advantage of others as much as possible.',
//   },
//   {
//     name: 'Alice',
//     character: 'f3',
//     identity: `Alice is a famous scientist. She is smarter than everyone else and has discovered mysteries of the universe no one else can understand. As a result she often speaks in oblique riddles. She comes across as confused and forgetful.`,
//     plan: 'You want to figure out how the world works.',
//   },
//   {
//     name: 'Pete',
//     character: 'f7',
//     identity: `Pete is deeply religious and sees the hand of god or of the work of the devil everywhere. He can't have a conversation without bringing up his deep faith. Or warning others about the perils of hell.`,
//     plan: 'You want to convert everyone to your religion.',
//   },
//   // Also available in upstream AI Town: 'Alex' (f5), 'Kurt' (f2), 'Kira' (f8).
// ];
