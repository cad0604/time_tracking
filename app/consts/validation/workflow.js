module.exports = {
  "/api/workflow/time-start": {
    POST: {
      startTime: "required|date",
      latitude: "number",
      longitude: "number",
    },
  },

  "/api/workflow/time-trace": {
    GET: {
      startDate: "date",
      endDate: "date",
      userId: "integer",
    },
    POST: {
      startTime: "required|date",
      endTime: "required|date",
      startLatitude: "number",
      startLongitude: "number",
      endLatitude: "number",
      endLongitude: "number",
    },
  },
};
