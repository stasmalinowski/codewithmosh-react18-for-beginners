export const getCroppedImageUrl = (url: string, xDim: number, yDim: number) => {
  const searchTerm = "media/"
  const index = url.indexOf(searchTerm) + searchTerm.length

  return url.slice(0, index) + `crop/${xDim}/${yDim}/` + url.slice(index)
}