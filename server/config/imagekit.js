import ImageKit from "imagekit";



const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY?.trim(),
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY?.trim(),
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT?.trim(),
});

console.log("ImageKit keys:", {
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

export default imagekit;