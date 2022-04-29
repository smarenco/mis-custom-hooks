import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
  
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null })


    useEffect(() => {
        isMounted.current = true;
      return () => {
        isMounted.current = false;
      }
    }, [])
    
    useEffect(() => {
        
        setState({
            loading: true,
            error: null,
            data: null
        })

        fetch( url )
        .then( resp => resp.json() )
        .then( data => {
            
            if( isMounted.current ) {
                setState({
                    loading:false,
                    error: null,
                    data
                })
            }
            
        })
    
    }, [url])

    return state;
    
}
