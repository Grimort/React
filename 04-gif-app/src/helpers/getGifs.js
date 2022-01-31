export const getGifs = async (category) => {
  const apiKey = "aU1mxzY1mnTq5v2R9ylFKy3Can4oH2F0";
  const query = category;
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}"&limit=15`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium,
    };
  });
  return gifs;
};
