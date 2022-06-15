import React, {useEffect} from 'react'
import useWordle from '../hooks/useWordle'


export default function Wordle({solution}) {
 const {curremtGuess, handleKeyup} = useWordle(solution)

useEffect(() => {  
    window.addEventListener('keyup', handleKeyup) 
    return () => window.removeEventListener('keyup', handleKeyup)
 }, [handleKeyup])

  return (
    <div>current Guess - {curremtGuess}</div>
  )
}

