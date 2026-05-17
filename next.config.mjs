/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,

  //  "https://res.cloudinary.com/dj493l0jy/image/upload/v1773919208/foods/ba5fe863-4ff4-4140-b332-972572f98c60.png"
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '**', //folder er vitore sob file access korte parbe
        search: '',
      },
    ],
  }
};

export default nextConfig;
