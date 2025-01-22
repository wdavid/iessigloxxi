/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      domains: ["drive.google.com",
          "www.facebook.com",
          "res.cloudinary.com",
      ]
  },
  reactStrictMode: false,
};

export default nextConfig;
