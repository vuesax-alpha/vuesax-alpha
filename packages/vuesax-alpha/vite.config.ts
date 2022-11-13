import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// import typescript2 from "rollup-plugin-typescript2";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname + "/lib"),
    },
  },
  plugins: [
    vue(),
    // typescript2({
    //   check: false,
    //   include: ["./lib/**/*.vue", "./lib/**/*.ts"],
    //   tsconfigOverride: {
    //     compilerOptions: {
    //       sourceMap: true,
    //       declaration: true,
    //       declarationMap: true,
    //     },
    //     exclude: ["vite.config.ts", "./__test__/*"],
    //   },
    // }),
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./lib/VuesaxAlpha.ts",
      formats: ['es', "cjs"],
      name: "VuesaxAlpha",
    },
    
  },
});

