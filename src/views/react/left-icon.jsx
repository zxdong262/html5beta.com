import './left-icon.styl'

export default function ShareIcon (props) {
  const {
    className,
    ...rest
  } = props
  const cls = className ? ' ' + className : ''
  return (
    <span className={'icon icon-arrow-left' + cls} {...rest} />
  )
}
