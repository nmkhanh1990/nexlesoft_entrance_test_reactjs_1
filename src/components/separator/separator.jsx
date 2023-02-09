import './separator.css'

export function Separator({text}) {
  return <div className="separator">
    <div className="line"></div>
    <div className="text">{text}</div>
    <div className="line"></div>
  </div>
}