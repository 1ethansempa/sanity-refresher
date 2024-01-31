import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "5eb0u2yj",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
});
