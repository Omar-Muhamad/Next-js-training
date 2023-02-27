const navLinks = ['Blog', 'Contact'];
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex justify-between items-center p-5'>
      <Link href='/'>My Site</Link>
      <nav>
        <ul className='flex gap-5'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
