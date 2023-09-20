import { useEffect, useRef, useState } from 'react';
import { Spinner } from '../spinner';
import './map.css';

export const Map = () => {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (window.mapIsLoaded) {
      setIsMapLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A84ea2c9ce3b44b63b2c34a7ec9c0e0a89c5fcc61e07699def83179b253cdeb2a&width=100%25&height=720&lang=ru_RU&scroll=true&apikey=fb708e5c-741f-4868-a249-de9bcda366e7';

    script.onload = () => {
      setIsMapLoaded(true);
      window.mapIsLoaded = true;
    };

    script.onerror = () => {
      alert('Ошибка загрузки карты, перезагрузите страницу');
    };

    if (mapContainerRef.current) {
      mapContainerRef.current.appendChild(script);
    }

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);  
      }
    };
  }, []);

  return (
    <div id="map-container" style={{ width: '100%', height: '720px' }} ref={mapContainerRef}>
      {isMapLoaded ? null : <Spinner />}
    </div>
  );
}; 