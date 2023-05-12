export const uploadImage = async (formData) => {
  try {
    const res = await fetch('https://api.cloudinary.com/v1_1/dxftfhixe/image/upload', {
      method: 'POST',
      body: formData,
    })

    const data = res.json()

    return data
  } catch (error) {
    return error
  }
}
