// Write your code here

import {useState} from 'react'

import {MainContainer, ImageCont, ImagePara, Button} from 'styledComponents.js'

const Unlock = () => {
  const [isLocked, setLockFn] = useState({isLocked: true})

  onClickLock = () => {
    setLockFn((prevState) => !prevState.isLocked)
  }

  return (
    
    <MainContainer>
    {isLocked === true ? (
      <ImageCont
        img="https://assets.ccbp.in/frontend/hooks/lock-img.png"
        alt="lock"
      />
      <ImagePara>Your Device is Locked</ImagePara>
      <Button type="submit">Unlock</Button>
    ) : (
        <ImageCont
        img="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
        alt="lock"
      />
      <ImagePara>Your Device is Unlocked</ImagePara>
      <Button type="submit" onClick={onClickLock}>Lock</Button>
    )
    }
    </MainContainer>
  )
  
}
export default Unlock