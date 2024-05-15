import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";

installGlobals();



// Define route objects for different sections of your app
const homeRoutes = [
  { path: "/", component: "components/home/home.tsx", options: { index: true } },
  { path: "/home2", component: "components/home/home2.tsx"},
];

// const postRoutes = [
//   { path: "post", component: "post/index.tsx" },
//   { path: "post/new", component: "post/new.tsx" }
// ];

// const concertRoutes = [
//   { path: "concert", component: "concert/home.tsx" },
//   { path: "concert/trending", component: "concert/trending.tsx" },
//   { path: "concert/:city/:people", component: "concert/city.tsx" }
// ];

// Combine all route objects into a single array
const allRoutes = [...homeRoutes];

// Define routes using the array of route objects
// export default {
//   routes(defineRoutes) {
//     return defineRoutes((route) => {
//       allRoutes.forEach(({ path, component, options }) => {
//         route(path, component, options);
//       });
//     });
//   },
// };


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
