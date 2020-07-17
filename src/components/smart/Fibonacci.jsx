import React from 'react'
import useWorker from '../../utils/useWorker'
import { fib } from '../../utils/fibonacci'
import { memo } from 'react';

const Fibonacci = ({ num }) => {

    const result = useWorker(fib, [num]);

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
