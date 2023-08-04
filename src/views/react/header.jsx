import { host } from './common'
import ShareIcon from './share-icon'
import LeftIcon from './left-icon'

export default function Header () {
  return (
    <div className='pd2y'>
      <div className='fix'>
        <a
          href={host}
          className='fleft'
        >
          <LeftIcon className='mg1r' /> html5beta.com
        </a>
        <ShareIcon
          className='fright pointer'
          shareText='Share'
        />
      </div>
    </div>
  )
}
