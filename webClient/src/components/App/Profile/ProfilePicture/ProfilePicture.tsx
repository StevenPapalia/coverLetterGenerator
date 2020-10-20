import React, { useCallback, FC, ChangeEvent, memo } from 'react'
import { ImageContainer, UploadImage, RemoveImage } from './styles'

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onerror = reject
    reader.onload = () => {
      resolve(reader.result as string)
    }
    if (file) reader.readAsDataURL(file)
  })
}

interface Props {
  profilePicture: string
  editImage(imgUrl: string): void
}

const ProfilePicture: FC<Props> = ({ profilePicture, editImage }) => {
  const handleImageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    event.persist()
    const files = event.target.files
    if (!files || !files.length) {
      throw new Error('Error uploading image')
    } else {
      convertFileToBase64(files[0])
        .then((base64) => editImage(base64))
        .catch((error) => console.log(error))
        .finally(() => (event.target.value = '')) // reset element to empty to allow upload after error or reupload of same file
    }
  }, [])

  const handleImageRemoval = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    editImage('')
    event.preventDefault()
  }, [])

  return (
    <ImageContainer name='Profile Picture' onSubmit={handleImageRemoval}>
      <UploadImage
        accept='image/*'
        type='file'
        message='Upload Profile Picture'
        title=''
        imgUrl={profilePicture}
        onChange={handleImageChange}
      />
      <RemoveImage type='submit' value='' />
    </ImageContainer>
  )
}

export const ProfilePictureMemo = memo(ProfilePicture)
