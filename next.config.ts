// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ✅ Needed if you're importing MUI components from modern paths (like Grid v2)
  experimental: {
    typedRoutes: true, // optional, useful for TS support
  },

  // ✅ Optional: Optimize font and image handling
  images: {
    domains: ['yourdomain.com'], // add your image hosting domains here
  },

  // ✅ Optional: Enable SWC minification (default in modern Next)
 
};

export default nextConfig;
