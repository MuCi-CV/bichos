import React, { createContext, useContext, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const setGlobalImageLoaded = (value) => {
    setImageLoaded(value);
  };

  return (
    <ImageContext.Provider value={{ imageLoaded, setGlobalImageLoaded }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  return useContext(ImageContext);
};
