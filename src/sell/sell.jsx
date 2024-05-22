import React from 'react';

const Sell = () => {
  let url
  const handleImageChange = (event) => {
    console.log(event);
    const selectedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    url = imageUrl
  }
  function change_img(e) {
     const a=document.querySelector('.img_controle input')
     a.click()
     a.addEventListener('change', handleImageChange) 
     console.log(e.target.children);
     e.target.children[0].src=url;
  }
  
  return (
    <div  className="sine">
      
      <div  className="image">
        <div className="img_controle">
          <input type='file'></input>
          <img src="src/sell/add.svg"></img>
          <img src="src/sell/delete.svg"></img>
        </div>
        <div className="img_show"></div>
        <div className="img_change">
          <div onClick={change_img} ><input type="image"></input></div>
          <div onClick={change_img}></div>
          <div onClick={change_img}></div>
          <div onClick={change_img}></div>
          <div onClick={change_img}></div>
        </div>
      </div>
    </div>
  );
};

export default Sell;