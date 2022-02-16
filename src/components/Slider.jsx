import { useState, useEffect } from 'react';

const images = [
  '/assets/image-1.avif',
  '/assets/image-2.jpg',
  '/assets/image-3.avif',
  '/assets/image-4.avif',
  '/assets/image-5.avif',
  '/assets/image-6.avif',
  '/assets/image-7.avif',
  '/assets/image-8.avif',
  '/assets/image-9.avif',
  '/assets/image-10.avif',
  '/assets/image-11.avif',
  '/assets/image-12.avif',
];

let count = 0;

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    startSlider();
  }, []);

  function startSlider() {
    let isMounted = true;
    setInterval(() => {
      if (isMounted) {
        changeImage();
      }
    }, 300);
    return () => {
      isMounted = false;
    };
  }

  function changeImage() {
    count = (count + 1) % images.length;
    setCurrentImage(count);
  }

  return (
    <div className='w-full select-none aspect-video overflow-hidden lg:container '>
      <img src={images[currentImage]} alt='' />
    </div>
  );
};

export default Slider;
