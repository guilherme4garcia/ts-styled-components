import React from 'react'
import {useContext, useEffect, useState} from 'react'
import { Box } from '../styles/global'
import { UserContext } from '../context';

function Landing() {

  const {red} = useContext(UserContext)
  const [color, setColor] = useState(red)
  // 
  useEffect(() => {
    
    console.log(red)
  }, [red])
  
  
  return (
    <Box inputColor='blue'>
       <form>
            <label htmlFor="">
                <input style={{fontSize: '24px'}} type="text" value={color} onChange={e => setColor(Number(e.target.value))} />
            </label>
            
        </form>
    </Box>
  )
}

export {Landing}