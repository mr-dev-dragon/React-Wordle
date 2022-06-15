import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle'


export default function wordle({solution}) {
 const {curremtGuess, handleKeyup} = useWordle(solution)

useEffect(() => {  
    window.addEventListener('keyup', handleKeyup) 
    return () => {
        window.removeEventListener('keyup', handleKeyup)
    }
 })

  return (
    <div>wordle</div>
  )
}

