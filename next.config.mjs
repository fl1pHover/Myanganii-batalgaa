/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000/",
    NEXT_PUBLIC_JWT_SECRET: "MYNGANIIBATALGAA",
    TURNSTILE_SECRET_KEY: "asdf",
  },

};

export default nextConfig;
