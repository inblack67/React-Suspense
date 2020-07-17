import React, { Suspense } from 'react'
import BostonRoutes from './BostonRoutes'
import Preloader from '../dumb/Preloader'

const Home = () => {
    return (
        <div>
            <p className="flow-text center">
                Boston Routes
            </p>
            <Suspense fallback={<Preloader />}>
                <BostonRoutes />
            </Suspense>
        </div>
    )
}

export default Home
