export const searchImages = async (query) => {
  const request = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_AUTH_KEY}`,
      },
    }
  );
  console.log({ key: import.meta.env.VITE_AUTH_KEY, query });

  const response = await request.json();
  console.log(response);
};
