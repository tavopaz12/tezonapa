import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { uploadImage } from 'services/uploadCloudinary'

export default function Home() {
  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()
  const [images, setImages] = useState([])
  const [files, setFiles] = useState(null)

  const handleImageChange = (e) => {
    const files = e.target.files
    setFiles(files)

    const newUrlImages = []

    for (const file of files) {
      const url = URL.createObjectURL(file)
      newUrlImages.push({ url, file })
    }

    setImages([...images, ...newUrlImages])
  }

  const uploadImages = async (formData) => {
    formData.append('upload_preset', 'crdrsp9k')
    const urls = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      formData.append('file', file)

      const data = await uploadImage(formData)

      if (data.secure_url !== '') {
        urls.push(data.secure_url)
      }
    }

    return urls
  }

  async function handleOnSubmit(event) {
    event.preventDefault()

    const formData = new FormData()

    const res = await uploadImages(formData)

    console.log(res)
  }

  return (
    <div>
      <Head>
        <title>Image Uploader</title>
        <meta name="description" content="Upload your image to Cloudinary!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Image Uploader</h1>

        <p>Upload your image to Cloudinary!</p>

        <form method="post" onSubmit={handleOnSubmit}>
          <p>
            <input type="file" multiple onChange={handleImageChange} />
          </p>

          {images.map((file, index) => (
            <Image
              key={index}
              src={file.url}
              alt="hola"
              width={100}
              height={100}
            />
          ))}

          {imageSrc && !uploadData && (
            <p>
              <button>Upload Files</button>
            </p>
          )}

          {uploadData && (
            <code>
              <pre>{JSON.stringify(uploadData, null, 2)}</pre>
            </code>
          )}

          <button>Subir imagen</button>
        </form>
      </main>

      <footer>
        <p>
          Find the tutorial on{' '}
          <a href="https://spacejelly.dev/">spacejelly.dev</a>!
        </p>
      </footer>
    </div>
  )
}
