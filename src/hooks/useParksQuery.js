import React, { useState, useEffect } from 'react'


function useParksQuery() {
    const [parks, setParks] = useState([])
    const [lim, setLim] = useState(0)

    useEffect(() => {
     
        fetch(`https://jonahtaylor-national-park-service-v1.p.rapidapi.com/parks?limit=465&start=${lim}`, {
            "method": "GET",
            "headers": {
                "x-api-key": "IfH1db76rkBBoCesZzQV8fyHMNJmSfuI2xu3KT0g",
                "x-rapidapi-host": "jonahtaylor-national-park-service-v1.p.rapidapi.com",
                "x-rapidapi-key": "03cbacb2d6msh147d7e91d53a89fp189018jsn4c2e0d1cd811"
            }
        })
            .then(resp => resp.json())
            .then(data => {

                // saveDB(data)
                setParks(data)
                console.log(parks)
                // if (lim < 465) { setLim(lim + 50) }
            })
            .catch(err => {
                console.error(err);
            })

    }, [lim])
    console.log("parks:")
    console.log(parks)

    useEffect(()=>{
        fetch('http://localhost:3000/parks', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(parks)
                })
                    .then(resp => resp.json())
                    .then(data => console.log(data))
                    .catch(err => {
                        console.error(err);
                    });

    },[parks])

   return parks

}



export default useParksQuery