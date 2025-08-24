import { defineEnv } from "nviron";

export const env = defineEnv({
  PORT: { default: "8080", required: true },
});
