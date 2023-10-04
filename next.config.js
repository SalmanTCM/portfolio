/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    // ...other configurations...
  
    // Add this configuration for static HTML export
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other routes if needed
      };
    },
  };
  