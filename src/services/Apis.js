import axios from 'axios';

const baseUrl = 'https://masak-apa-tomorisakura.vercel.app/api';

const apis = axios.create({
  baseURL: baseUrl,
});
/*
export const useAxios = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await apis.get(params);
      setResponse(result.data.results);
    } catch (error) {
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { response, error, loading, fetchData };
};*/

export default apis;