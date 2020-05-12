import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import defaultprofilepicture from '../img/default-profile-picture.png'
import UploadButton from '../components/UploadButton/UploadButton'

ImageUpload.propTypes = {
  updateImage: PropTypes.func,
  previewImage: PropTypes.object,
}

export default function ImageUpload({ updateImage, previewImage }) {
  return (
    <>
      {previewImage.imageUrl ? (
        <ImageStyled>
          <img src={previewImage.imageUrl} alt="" />
        </ImageStyled>
      ) : (
        <ImageStyled>
          <img src={defaultprofilepicture} alt="" />
        </ImageStyled>
      )}
      <UploadStyled>
        <UploadButton>Hochladen</UploadButton>
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          onChange={updateImage}
          className="file-upload"
        />
      </UploadStyled>
    </>
  )
}

const ImageStyled = styled.div`
  height: 150px;
  width: auto;
  img {
    height: 100%;
    width: auto;
    object-fit: cover;
    border-radius: 2px;
  }
`

const UploadStyled = styled.section`
  display: flex;
  align-items: center;
  margin: 4px 0 16px 0;
  .file-upload {
    opacity: 0;
    position: absolute;
  }
`
