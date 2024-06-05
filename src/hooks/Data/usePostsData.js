import {useEffect, useState} from "react";
import supabase from "../../apis/supabaseClient.js";

function usePostsData() {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('Posts').select('*');
      if (error) {
        console.log('@@ error=>', error);
        setError(error);
      } else {
        console.log('@@ data =>', data);
        setData(data);
      }
    };
    fetchData();
  }, []);
  return {data, error};
}
export default usePostsData;