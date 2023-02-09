import { FC, ReactElement, useEffect, useState } from 'react'
import CounterInterface from '../interface/counter';


const Counter: FC<{ props: CounterInterface }> = ({ props }): ReactElement => {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {

            // actions(setCounter)

            setCounter(counter + 1)
        }, props.timeToCount);
        return () => clearInterval(interval)
    })

    return (
        props.children as ReactElement
    )
}

export default Counter