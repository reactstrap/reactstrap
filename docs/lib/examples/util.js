/**
 * Returns placeholder image url
 */
export const getPlaceholderImg = config => {
  if (typeof config !== 'object') config = {};
  const width = config.w || 200;
  const height = config.h || 100;
  const dimensions = `${width}x${height}`;
  const text = config.txt || dimensions;
  let url = `https://via.placeholder.com/${dimensions}`;
  if (typeof config.bg === 'string' && config.bg.length === 6) {
    url += `/${config.bg}`;
  }
  if (typeof config.txtclr === 'string' && config.txtclr.length === 6) {
    url += `/${config.txtclr}`;
  }
  url += `?text=${text}`;
  return url;
};
