import React,{ useState, useEffect } from 'react'

function useParksQuery() {
    const [parks, setParks] = useState([])
    useEffect(() => {
        fetch("https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks", {
            "method": "GET",
            "headers": {
                "x-api-key": "IfH1db76rkBBoCesZzQV8fyHMNJmSfuI2xu3KT0g",
                "x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
                "x-rapidapi-key": "03cbacb2d6msh147d7e91d53a89fp189018jsn4c2e0d1cd811"
            }
        })
            .then(resp => resp.json())
            .then(data => setParks(data))
            .catch(err => {
                console.error(err);
            });
    }, [])
  return parks
}

export default useParksQuery