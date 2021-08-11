import { useEffect, useState } from "react";
import { heroSpec } from "../../interfaces/interfaces";
import { Service } from "../../services/services";

const useHeroService = () => {
    const [result, setResult] = useState<Service<heroSpec[]>>({
      status: 'loading',
    });
  
  
    useEffect((): void => {
      fetch('https://akabab.github.io/superhero-api/api/all.json')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
  
    }, []);
    return result;
  };

export default useHeroService;