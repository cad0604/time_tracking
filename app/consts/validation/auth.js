module.exports = {
  "/api/auth/signup": {
    POST: {
      firstName: "required|string",
      lastName: "required|string",
      dni: "required|string",
      password: "required|string",
    },
  },

  "/api/auth/signin": {
    POST: {
      dni: "required|string",
      password: "required|string",
    },
  },
};
