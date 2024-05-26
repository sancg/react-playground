export const searchImages = async (query) => {
  const request = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_AUTH_KEY}`,
      },
    }
  );

  const response = await request.json();
  console.log(response);
};
