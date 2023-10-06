/* @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: ["links.papareact.com", "www.jsonkeeper.com"],
  },
  env: {
    mapbox_key:
      "pk.eyJ1IjoiZGMxNzA4IiwiYSI6ImNsbmRwNjJsaDA2bXEycHBlbm5pM3I4aWkifQ.C5T1HKvwsy_YqJaCSEZTEg",
  },
};
