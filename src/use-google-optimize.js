import { useEffect, useState } from 'react';

export default function useGoogleOptimize(experimentID) {
  const [variant, setVariant] = useState(null);
  const updateVariant = (value) => {
    setVariant(value === undefined || value === null ? value : parseInt(value));
  }

  useEffect(() => {
    const { dataLayer, google_optimize } = window;
    const delayedInitialization = () => {
      const value = google_optimize && google_optimize.get(experimentID);
      setVariant(value);
    }

    if (dataLayer) {
      const hideEnd = dataLayer && dataLayer.hide && dataLayer.hide.end;

      if (hideEnd) {
        dataLayer.hide.end = () => {
          delayedInitialization();
          hideEnd();
        }
      } else {
        delayedInitialization();
      }

      dataLayer.push('event', 'optimize.callback', {
        name: experimentID,
        callback: updateVariant,
      });
    }

    return () => {
      dataLayer.push('event', 'optimize.callback', {
        name: experimentID,
        callback: updateVariant,
        remove: true,
      });
    }
  })

  return variant;
}
