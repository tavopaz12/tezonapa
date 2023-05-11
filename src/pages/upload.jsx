import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const [imageSrc, setImageSrc] = useState()
  const [uploadData, setUploadData] = useState()

  async function handleOnChange(e) {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', process.env.CLOUDINARY_PRESET)

    const data = await fetch(process.env.CLOUDINARY_URL, {
      method: 'POST',
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.secure_url !== '') {
          const uploadedFileUrl = data.secure_url
          console.log(uploadedFileUrl)
        }
      })
      .catch((err) => console.error(err))
  }

  async function handleOnSubmit(event) {
    event.preventDefault()

    const form = event.currentTarget
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file',
    )

    const formData = new FormData()

    for (const file of fileInput.files) {
      formData.append('file', file)
    }

    formData.append('upload_preset', 'dxftfhixe')

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/dxftfhixe/image/upload',
      {
        method: 'POST',
        body: formData,
      },
    ).then((r) => r.json())

    console.log(data)

    setImageSrc(data.secure_url)
    setUploadData(data)
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
            <input type="file" name="file" onChange={handleOnChange} />
          </p>

          <Image
            src="https://res.cloudinary.com/dxftfhixe/image/upload/v1683830507/hqf0fsay1xpjbtcu1kta.png"
            alt="hola"
            width={100}
            height={100}
          />

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
