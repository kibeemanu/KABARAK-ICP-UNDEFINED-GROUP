
// src/agent.js
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from './trust_system.did.js'; // This file should be generated by DFX

const canisterId = 'your-canister-id'; // Replace with your canister ID

const agent = new HttpAgent();
agent.fetchRootKey(); // Only needed if you are developing locally

export const trustSystem = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});
