// import axios from 'axios'
// import { useState } from 'react'

// export const useAxGet = (keyName, apiLink) => {

//     const nameOfKey = keyName

//     const [storedState, setStoredState] = useState([{
//         [nameOfKey]: '',
//         error: ''
//     }])

//     axios.get(`${apiLink}`)
//     .then((res)=> {
//         setStoredState.nameOfKey(`You are recieving data`,res)
//     })
//     .catch(err => {
//         setStoredState.error({error: err})
//     })
//     console.log(storedState)
//     return [storedState]
// }