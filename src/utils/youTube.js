export function getYoutubeThumbnail(link) {
  const videoId = link.split('v=')[1];
  if (!videoId) {
    return null;
  }
  const ampersandPosition = videoId.indexOf('&');
  if (ampersandPosition !== -1) {
    return `https://img.youtube.com/vi/${videoId.substring(0, ampersandPosition)}/0.jpg`;
  }
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
}
