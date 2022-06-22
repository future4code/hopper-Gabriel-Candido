import { useState, useEffect} from 'react';
import { getCountries } from '../services/ApiRequest';

const useGetCountries = () => {
  const [ data, setData ] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleGetCountries();
  }, []);

  const handleGetCountries = async () => {
    setLoading(true);
    setData(await getCountries());
    setLoading(false);
  }
  return { data, loading }
}

export default useGetCountries
