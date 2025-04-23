import React from "react";
import Bird from "../../assets/images/bird.jpg";
const AssetsImports = () => {
  return (
    <>
      <div className="image-container">
        <p>Imagem de um pássaro via import</p>
        <img src={Bird} alt="Bird" />
      </div>

      <div className="image-container">
        <p>Imagem de um pássaro via URL</p>
        <img
          src="https://www.sciencepartners.info/wp-content/uploads/2012/08/harpyeagle.jpg"
          alt="Bird"
        />
      </div>

      <div className="image-container">
        <p>Imagem de um olho via public folder</p>
        <img src="/eye.jpg" alt="Bird" width="200px" />
      </div>
    </>
  );
};

export default AssetsImports;
