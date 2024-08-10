/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
		GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT || "http://localhost:3001/graphql",
  }
};

export default nextConfig;
