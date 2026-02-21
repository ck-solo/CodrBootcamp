import { useState } from "react";

export const useFetch =(url) => {
     const [data, setData] = useState([]);
      const [loader, setLoader] = useState([]);
      const [error, seterror] = useState(second)
       
      const fetchingData = async () => {
        try {
            
            setLoader(true);
            const res = await fetch(url);
            const data = await res.json();
            console.log;
            setLoader(false);
            setData(data);
        } catch (error) {
            seterror(error.message || "Something is error")
            
        }
      };
    
      useEffect(() => {
        fetchingData();
      }, []);

      return {data, loader , error}
    
}