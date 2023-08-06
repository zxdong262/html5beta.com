import { host } from './common'
import Animate from './animate'

export default function Footer () {
  return (
    <div className='mg3y pd3y'>
      <div>
        <a
          href={host}
        >
          © html5beta.com
        </a>
      </div>
      <Animate />
    </div>
  )
}
