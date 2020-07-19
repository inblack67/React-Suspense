import React from 'react'
import { fib } from '../../utils/fibonacci'
import { memo } from 'react';
import { useIntensiveFunctionSuspense } from 'use-intensive-function-suspense'

const Fibonacci = ({ num }) => {

    const result = useIntensiveFunctionSuspense(fib, [num]);

    return (
        <div>
            <h4>
            Fibonacci For {num} = {'    '} 
             <strong className='red-text'>{result}</strong>
            </h4>
        </div>
    )
}

export default memo(Fibonacci);
