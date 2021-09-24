import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    define: { 'process.env.NODE_ENV': '"production"' },
    logLevel: "info",
    entryPoints: ["src/index.jsx"],
    bundle: true,
    outfile: "build/out.js",
  },
  { root: "build" }
);