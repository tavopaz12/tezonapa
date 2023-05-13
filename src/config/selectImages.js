export const selectImages = (onSelect) => {
  return function (e) {
    const files = e.target.files
    const newUrlImages = []

    for (const file of files) {
      const url = URL.createObjectURL(file)
      newUrlImages.push({ url, file })
    }

    onSelect([...newUrlImages], files)
  }
}
