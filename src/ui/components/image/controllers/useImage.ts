import { useState } from 'react';

export function useImage() {
  // States
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Methods
  const onLoadStart = () => {
    setLoading(true);
  };
  const onLoadEnd = () => {
    setLoading(false);
  };

  const onError = () => {
    setError(true);
    setLoading(false);
  };

  return {
    loading,
    error,
    onLoadStart,
    onLoadEnd,
    onError,
  };
}
