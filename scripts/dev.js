const { execSync } = require("child_process");
const { cd } = require("shelljs");

cd("./packages/documents");

execSync(`vuepress dev docs`);
