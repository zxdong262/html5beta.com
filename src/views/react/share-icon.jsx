import './share-icon.styl'
import { url, title, desc } from './common'
import { Toast } from 'antd-mobile'
import { copyTextToClipboard } from './copy'

export default function ShareIcon (props) {
  const {
    className,
    shareText,
    ...rest
  } = props
  const cls = className ? ' ' + className : ''
  async function share () {
    const shareData = {
      title,
      text: desc,
      url
    }
    try {
      await navigator.share(shareData)
      Toast.show({
        content: 'Shared'
      })
    } catch (e) {
      console.log(e)
      copyTextToClipboard(url)
    }
  }
  return (
    <span
      className={cls}
      onClick={share}
      {...rest}
    >
      {shareText}
      <span
        className='icon icon-share mg1l'
      />
    </span>

  )
}
