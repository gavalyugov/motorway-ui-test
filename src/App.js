import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='app grid'>
      {
         images?.map(img => (
          <div key={img.id}>
            <img src={`${img.url}.jpg`} alt='' className='car'/>
            <img src={`${img.user.profile_image}.webp`} alt='' className='user'/>
          </div>
        ))
      }
    </div>
  );
}

export default App;
