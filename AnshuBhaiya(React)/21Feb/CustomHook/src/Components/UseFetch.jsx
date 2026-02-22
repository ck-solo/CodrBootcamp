import { useEffect, useState } from "react";

export const useFetch =(url) => {
     const [data, setData] = useState([]);
      const [loader, setLoader] = useState(false);
      const [error, setError] = useState(null)
       
      const fetchingData = async () => {
        try {
            
            setLoader(true);
            const res = await fetch(url);
            const data = await res.json();
      
            setLoader(false);
            setData(data);
        } catch (error) {
            setError(error.message || "Something is error")
            
        }
      };
    
      useEffect(() => {
        fetchingData();
      }, [url]);

      return {data, loader , error, setData}
    
}