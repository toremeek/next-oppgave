import Link from 'next/link'

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link href="/">
            <a className="first">Hjem</a>
          </Link>
        </li>
        <li>
          <Link href="/Quiz"><a className="first">Quiz</a></Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
