import { useEffect } from 'react';

const useCalculateHeight = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
};

export default useCalculateHeight;