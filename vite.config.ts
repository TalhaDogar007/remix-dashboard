import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals();

// Define route objects for different sections of your app
const homeRoutes = [
  {
    path: "/",
    component: "components/home/home.tsx",
    options: { index: true },
  },
];

const filesRoutes = [
  { path: "/files", component: "components/files/files.tsx", options: {} },
];

const settingsRoutes = [
  {
    path: "/settings",
    component: "components/settings/settings.tsx",
    options: {},
  },
];

// const concertRoutes = [
//   { path: "concert", component: "concert/home.tsx" },
//   { path: "concert/trending", component: "concert/trending.tsx" },
//   { path: "concert/:city/:people", component: "concert/city.tsx" }
// ];

// Combine all route objects into a single array
const allRoutes = [...homeRoutes, ...filesRoutes, ...settingsRoutes];

export default defineConfig({
  plugins: [
    remix({
      routes: async (defineRoutes) => {
        return defineRoutes((route) => {
          allRoutes.forEach(({ path, component, options }) => {
            route(path, component, options);
          });
        });
      },
    }),
  ],
});
