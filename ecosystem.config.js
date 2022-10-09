// ecosystem.js
module.exports = {
  apps: [
    {
      name: "API",
      script: "app.js", // name of the startup file
      instances: "max", // number of workers you want to run
      exec_mode: "cluster", // to turn on cluster mode; defaults to 'fork' mode
      //   env: {
      //     PORT: "9090", // the port on which the app should listen
      //   },
    },
  ],
};
