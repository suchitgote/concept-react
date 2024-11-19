import { useEffect, useState } from "react";

const useFetch = (url,body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
    let option = null
    if(body != undefined){
        console.log('if =', body);
        option = {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
    }

    fetch(url, option)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });

    //    const fetchdata = async()=>{
    //         try {
    //             const result = await fetch(url)
    //             const output = await result.json()
    //             setLoading(false)
    //             setData(output)
    //         } catch (error) {
    //             setLoading(false)
    //             setError(true)
    //         }
    //     }
    //     fetchdata()
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
