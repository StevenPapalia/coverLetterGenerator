import React, { useCallback, FC, ChangeEvent, memo } from "react";
import { ImageContianer, UploadImage, RemoveImage } from "./styles";

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    if (file) reader.readAsDataURL(file);
  });
};

interface Props {
  profilePicture: string;
  uploadImage(char: string): void;
}

const ProfilePicture: FC<Props> = ({ profilePicture, uploadImage }) => {
  
  const handleFileChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      event.persist();
      const files = event.target.files;
      if (files === null) {
        throw new Error("Error uploading bad file");
      }
      Array.from(files).forEach(file => {
        convertFileToBase64(file)
          .then(base64 => {
            uploadImage(base64);
            event.target.value = "";
          })
          .catch(error => {
            console.log(error);
            event.target.value = "";
          });
      });
    },
    []
  );

  const handleRemoveImage = useCallback(
    (event: ChangeEvent<HTMLFormElement>) => {
      uploadImage("");
      event.preventDefault();
    },
    []
  );

  return (
    <ImageContianer name="Profile Picture" onSubmit={handleRemoveImage}>
      <UploadImage 
        accept="image/*"
        type="file"
        title=""
        imgUrl={profilePicture}
        message="Upload Profile Pitcure"
        onChange={handleFileChange}
      />
      <RemoveImage type="submit" value="" />
    </ImageContianer>
  );
}

export const ProfilePictureMemo = memo(ProfilePicture);
  