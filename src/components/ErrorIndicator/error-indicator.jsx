import './error-indicator.css'

export default function ErrorIndicator() {
  return (
    <div className='error-indicator'>
      <img src='images/death-star.png' alt='error icon' />
      <span className='boom'>BOOM!</span>
      <span>something has gone terribly wrong</span>
    </div>
  )
}
