const apis = [
  {
    id: "weather",
    endpoint:
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline",
    queryStrings: [
      {
        key: "key",
        value: "SRPGEV4RT2TNPEUUB9GAWZMPV",
      },
      {
        key: "contentType",
        value: "json",
      },
    ],
  },
  {
    id: "giphy",
    endpoint: "https://api.giphy.com/v1/gifs/translate",
    queryStrings: [
      {
        key: "api_key",
        value: "0QshOUvsrPEtLWmWU2R2qdpGjAWPLRhj",
      },
      {
        key: "s",
        value: "",
      },
    ],
  },
];

export { apis };
