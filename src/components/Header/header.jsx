import './header.css'

export default function Header() {
  return (
    <header className='header d-flex'>
      <h3>
        <a href='#'>Star Wars API App</a>
      </h3>
      <ul className='d-flex'>
        <li>
          <a href='#'>People</a>
        </li>
        <li>
          <a href='#'>Planets</a>
        </li>
        <li>
          <a href='#'>Starships</a>
        </li>
      </ul>
    </header>
  )
}
