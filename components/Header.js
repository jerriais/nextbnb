import Link from 'next/link'
import 'react-day-picker/lib/style.css' //only imported here to prevent Link from not working

const Header = () => (
    <div className='nav-container'>
        <Link href='/'>
            <a><img src='/img/logo.jpg' alt=""/></a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href="/register">
                        <a>Sign Up</a>
                    </Link>
                </li>
                <li>
                    <Link href='/login/'>
                        <a>Log in</a>
                    </Link>
                </li>
            </ul>
        </nav>

        <style jsx>{`
      ul {
        margin: 0;
        padding: 0;
      }

      li {
        display: block;
        float: left;
      }

      a {
        text-decoration: none;
        display: block;
        margin-right: 15px;
        color: #333;
      }

      nav a {
        padding: 1em 0.5em;
      }

      .nav-container {
        border-bottom: 1px solid #eee;
        height: 50px;
      }

      img {
        float: left;
        height: 60px;
      }

      ul {
        float: right;
      }
    `}</style>
    </div>
)

export default Header
