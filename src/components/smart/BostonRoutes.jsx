import React from 'react'
import fetchRoutesSuspense from '../../ajaxCalls/fetchRoutesSuspense'

const BostonRoutes = () => {

    const res = fetchRoutesSuspense(`https://api-v3.mbta.com/routes`);

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
