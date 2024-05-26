export const searchImages = async (query) => {
  const request = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${query}`,
    {
      headers: {
        Authorization: `Client-ID ${import.meta.env.VITE_AUTH_KEY}`,
      },
    }
  );
  if (!request.ok) return { error: { status: request.status } };

  return await request.json();
};
