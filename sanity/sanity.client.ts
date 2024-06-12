import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "rqlqwxd2",
  dataset: "production",
  apiVersion: "2024-06-11",
  useCdn: false,
};

const client = createClient(config);

export default client;