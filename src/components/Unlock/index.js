// Write your code here

import {useState} from 'react'

import {MainContainer, ImageCont, ImagePara, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLockFn] = useState(true)

  const onClickLock = () => {
    setLockFn(prevState => !prevState)
  }

  return (
    <MainContainer>
      {isLocked === true ? (
        <>
          <ImageCont
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
          />
          <ImagePara>Your Device is Locked</ImagePara>
          <Button type="submit" onClick={onClickLock}>
            Unlock
          </Button>
        </>
      ) : (
        <>
          <ImageCont
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
          />
          <ImagePara>Your Device is Unlocked</ImagePara>
          <Button type="submit" onClick={onClickLock}>
            Lock
          </Button>
        </>
      )}
    </MainContainer>
  )
}
export default Unlock
