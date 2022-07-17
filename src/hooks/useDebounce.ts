import React from 'react';


export default function useDebounce(value: string | number, delay: number) {  
  const [debouncedValue, setDebouncedValue] = React.useState(value);
	
  React.useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [delay, value]
  );

  return debouncedValue;
}