import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";

createInertiaApp({
  title: (title) => (title ? `${title} - Laravel` : "Laravel"),
  resolve: async (name) => {
    const pages = import.meta.glob("./pages/**/*.tsx");

    return await resolvePageComponent(`./pages/${name}.tsx`, pages);
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
