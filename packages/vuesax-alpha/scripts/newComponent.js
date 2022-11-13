import shelljs from "shelljs";
// import inquirer from "inquirer";
import boxen from "boxen";
// import { execSync } from "child_process";
import chalk from "chalk";
import print from "../build/utils/print.js";
const green = print("green");
const warning = print("redBright");
const emptyLine = print();

const writeToFile = (contents, file) => {
  new shelljs.ShellString(contents).to(file);
};

function FileScss(name) {
  return `@import "../../../styles/_mixins.scss";
@import 'root';

.vs-${name.toLowerCase()}-content {
  background: -color('color');
}
`.trim();
}

function FileRootScss(name) {
  return `.vs-${name.toLowerCase()}-content {
  --vs-color: var(--vs-primary);
}`.trim();
}

function FileComponentVue(name) {
  return `<template>
  <div class="vs-${name.toLowerCase()}-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vs${name}",
  extends: BaseComponent,
  data: () => ({}),
});
</script>

<style lang="scss" src="./style.scss"></style>
`.trim();
}

function addComponentJson(name) {
  shelljs.sed(
    "-i",
    '"newComponent": ""',
    `"vs${name}": "src/components/vs${name}/Base/vs${name}.vue",\n  "newComponent": ""`,
    "./build/components/components.json",
  );
}

function addComponentExport(name) {
  shelljs.sed(
    "-i",
    "// new component slot",
    `import vs${name} from '@/components/vs${name}/Base/vs${name}.vue';\n// new component slot`,
    "./src/components/index.ts",
  );
  shelljs.sed(
    "-i",
    "// new export slot",
    `vs${name},\n// new export slot`,
    "./src/components/index.ts",
  );
}

function checkComponent(_name) {
  if (shelljs.test("-e", `src/components/vs${_name}`)) {
    return "This component already exists";
  } else if (!/^[A-Z]/.test(_name)) {
    return "This component name not Capitalize";
  } else {
    return true;
  }
}

const ComponentName = process.argv[2];

const canMakeComponent = checkComponent(ComponentName);
if (canMakeComponent === true) {
  addComponentJson(ComponentName);
  addComponentExport(ComponentName);
  shelljs.mkdir("-p", `src/components/vs${ComponentName}/Base`);
  shelljs.cd(`src/components/vs${ComponentName}/Base`);
  writeToFile(FileRootScss(ComponentName), `_root.scss`);
  writeToFile(FileScss(ComponentName), `style.scss`);
  writeToFile(FileComponentVue(ComponentName), `vs${ComponentName}.vue`);

  // execSync(`code style.scss && code vs${ComponentName}.vue && code index.ts`);

  emptyLine();
  emptyLine();
  green(chalk.bold(`Component ${ComponentName} was created successfully!`));
  emptyLine();
  emptyLine();
} else {
  emptyLine();
  emptyLine();
  warning(`Component create failure. ${canMakeComponent}`);
  emptyLine();
  emptyLine();
}

