module.exports = {
  overwrite: true,
  schema: process.env.GRAPHQL_ENDPOINT,
  documents: ["src/graphql/**/*.graphql"],
  generates: {
    "src/graphql/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};
