import { useState } from "react";

export const useUpdate =(url) => {
     const [data, setData] = useState([]); 
      const [payload, setpayload] = useState([]) 
       
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
    
    const updateHandler=()=>{
    post.map((post)=> post.id == id ? change : post)
}

      return {data, loader , error}
    
}