<<<<<<< HEAD
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
=======
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap({
    changefreq: "weekly",
    priority: 0.7
  }), react()]
});
>>>>>>> 6ac897a1feaaab82150cd3fcd8b62f0a619f84d4
