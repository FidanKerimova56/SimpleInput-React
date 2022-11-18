import React, { useState } from 'react'

function UserLogin() {
    const [stateOfEmail,setStateOfEmail]=useState(false)
    const [stateOfPassword,setStateOfPassword]=useState(false)
  return (
    <div>
        <input type="email" onClick={()=>setStateOfEmail(!stateOfEmail)}/>
        {stateOfEmail&&<>Yalnız .ru domenlərinə icazə verilir.</>}
        <input type="password" onClick={()=>setStateOfPassword(!stateOfPassword)} />
        {stateOfPassword&&<>Ən azı 8 simvol</>}
    </div>
  )
}

export default UserLogin