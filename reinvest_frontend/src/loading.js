import {Ring} from 'react-awesome-spinners';

export const loadingPage = () =>{
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}>
      <Ring size = {120}/>
    </div>
  )
}