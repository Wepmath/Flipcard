import React from 'react';
import { useState } from 'react';
//import { useHistory } from 'react-router-dom';
const Sine = (poops) => {
  const title = JSON.parse(poops.title);
  const [formData, setFormData] = useState(title[1]);
 // const history = useHistory();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted with data:', formData);
    // Navigate to a new page upon form submission
    // history.push('/newpage');
  };
  const but = Object.keys(title[1]).map((key, index) => (
    <input type="text" placeholder={key} key={key} defaultValue={title[1][key]} name={key} className="sine_input" onChange={handleInputChange}/>
  ));
  return (
    <form className="sine" idname="sine" onSubmit={handleSubmit}>
      {but}
      <input type="submit" value={title[0]["name"]} className="submit"/>
    </form>
  );
};

export default Sine;