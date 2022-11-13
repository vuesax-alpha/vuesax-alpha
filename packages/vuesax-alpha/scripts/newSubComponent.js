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

function FileScss(name, subname) {
  return `@import "../../../styles/_mixins.scss";

.vs-${name.toLowerCase()}__${subname.toLowerCase()} {
  background: -color('color');
}`.trim();
}

function FileComponentVue(name, subname) {
  return `<template>
  <div class="vs-${name.toLowerCase()}__${subname.toLowerCase()}">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import BaseComponent from "@/mixins/component.vue";

export default defineComponent({
  name: "vs${name}${subname}",
  extends: BaseComponent,
  data: () => ({}),
});
</script>

<style lang="scss" src="./style.scss"></style>
`.trim();
}

function addComponentJson(name, subname) {
  shelljs.sed(
    "-i",
    '"newComponent": ""',
    `"vs${name}${subname}": "src/components/vs${name}/${subname}/vs${name}${subname}.vue",\n  "newComponent": ""`,
    "./build/components/components.json",
  );
}

function addComponentExport(name, subname) {
  shelljs.sed(
    "-i",
    "// new component slot",
    `import vs${name}${subname} from '@/components/vs${name}/${subname}/vs${name}${subname}.vue';\n// new component slot`,
    "./src/components/index.ts",
  );
  shelljs.sed(
    "-i",
    "// new export slot",
    `vs${name}${subname},\n  // new export slot`,
    "./src/components/index.ts",
  );
}

function checkComponent(name, subname) {
  if (shelljs.test("-e", `src/components/vs${name}/${subname}`)) {
    return "This component already exists";
  } else if (!/^[A-Z]/.test(subname)) {
    return "This subcomponent name not Capitalize";
  } else {
    return true;
  }
}

const ComponentName = process.argv[2];
const SubComponentName = process.argv[3];

const canMakeComponent = checkComponent(ComponentName, SubComponentName);
if (canMakeComponent === true) {
  addComponentJson(ComponentName, SubComponentName);
  addComponentExport(ComponentName, SubComponentName);
  shelljs.mkdir("-p", `src/components/vs${ComponentName}/${SubComponentName}`);
  shelljs.cd(`src/components/vs${ComponentName}/${SubComponentName}`);
  writeToFile(FileScss(ComponentName, SubComponentName), `style.scss`);
  writeToFile(
    FileComponentVue(ComponentName, SubComponentName),
    `vs${ComponentName}${SubComponentName}.vue`,
  );

  // execSync(`code style.scss && code vs${ComponentName}.vue && code index.ts`);

  emptyLine();
  emptyLine();
  green(
    chalk.bold(
      `Component ${ComponentName}${SubComponentName} was created successfully!`,
    ),
  );
  emptyLine();
  emptyLine();
} else {
  emptyLine();
  emptyLine();
  warning(`Component create failure. ${canMakeComponent}`);
  emptyLine();
  emptyLine();
}
