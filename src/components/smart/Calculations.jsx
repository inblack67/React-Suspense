import React, { Suspense } from 'react'
import Fibonacci from './Fibonacci'
import LazyPreloader from '../dumb/LazyPreloader'

const Calculations = () => {

    return (
        <div className="container center">
            <Suspense fallback={<LazyPreloader />}>
                <Fibonacci num={10} />
            </Suspense>
            <Suspense fallback={<LazyPreloader />}>
                <Fibonacci num={20} />
            </Suspense>
            <Suspense fallback={<LazyPreloader />}>
                <Fibonacci num={30} />
            </Suspense>
        </div>
    )
}

export default Calculations
