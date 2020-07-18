import React from 'react'
import useFetchSuspense from 'use-custom-fetch-suspense'

const BostonRoutes = () => {

    const res = useFetchSuspense(`https://api-v3.mbta.com/routes`);

    return (
        <div className='container'>
            <ul className='collection'>
                { res.data.map(data => <li className='collection-item' key={data.id}>
                    { data.attributes.long_name }
                </li>) }
            </ul>
        </div>
    )
}

export default BostonRoutes
