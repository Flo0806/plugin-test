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
};

export default plugin;
