import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
    </main>
  )
}

export default Home;
