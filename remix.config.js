// /** @type {import('@remix-run/dev').AppConfig} */
// export default {
//   ignoredRouteFiles: ["**/*.css"],
//   // appDirectory: "app",
//   // assetsBuildDirectory: "public/build",
//   // publicPath: "/build/",
//   // serverBuildPath: "build/index.js",
// };

// Define route objects for different sections of your app
const homeRoutes = [
  { path: "/", component: "home/index.tsx", options: { index: true } }
];

const postRoutes = [
  { path: "post", component: "post/index.tsx" },
  { path: "post/new", component: "post/new.tsx" }
];

const concertRoutes = [
  { path: "concert", component: "concert/home.tsx" },
  { path: "concert/trending", component: "concert/trending.tsx" },
  { path: "concert/:city/:people", component: "concert/city.tsx" }
];

// Combine all route objects into a single array
const allRoutes = [...homeRoutes, ...postRoutes, ...concertRoutes];

// Define routes using the array of route objects
export default {
  routes(defineRoutes) {
    return defineRoutes((route) => {
      allRoutes.forEach(({ path, component, options }) => {
        route(path, component, options);
      });
    });
  },
};
