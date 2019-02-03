import React from 'react';

const ImageList = ({ images }) => {
  const imagesList = images.map(({ id, description, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });

  return (
    <div>{imagesList}</div>
  );
};

export default ImageList;