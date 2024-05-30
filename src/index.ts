import { type Client } from "discord.js";

export default class Instance {
  private _opts;
  constructor(options: {
    client: Client;
    mongoUri?: string;
    commandsDir?: string;
    testServers?: string[];
    botOwners?: string[];
    events?: string;
    defaultPrefix?: string;
  }) {
    this._opts = options;
    if (!this._opts.client) {
      throw new Error("A client is required!");
    }
  }
}
