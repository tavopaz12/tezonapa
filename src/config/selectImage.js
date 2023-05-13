export const selectImage = (onSelect) => {
  return function (e) {
    const file = e.target.files[0]

    if (!file) {
      return
    }

    const url = URL.createObjectURL(file)
    onSelect({ url, file })
  }
}
