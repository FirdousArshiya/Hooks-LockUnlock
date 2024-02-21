import {useState} from 'react'

import {
  UnlockLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is Unlocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onClickButton = () => setIsUnlocked(prevStatus => !prevStatus)

  return (
    <UnlockLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onClickButton}>
        {buttonText}
      </Button>
    </UnlockLockContainer>
  )
}

export default Unlock

/* My OWN Code:-

index.js:-


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

*/
