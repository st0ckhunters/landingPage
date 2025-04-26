// astro.config.mjs
import { defineConfig } from "astro/config";

const [org, repo] = process.env.GITHUB_REPOSITORY?.split("/") || [];

export default defineConfig({
  site: `https://${org}.github.io/${repo}/`,
  base: `/${repo}/`,
});
