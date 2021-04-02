import Link from 'next/link'
import styles from './header.module.css'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Anasayfa</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}

export default Navigation
