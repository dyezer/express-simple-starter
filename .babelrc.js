module.exports = function (api) {
  api.cache(true);

  const plugins = [];

  const presets = [["@babel/preset-env", { targets: { node: "current" } }]];

  return {
    plugins,
    presets,
  };
};
