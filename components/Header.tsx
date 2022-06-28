import Link from 'next/link'
import React from 'react'
import style from './Header.module.scss';
type Props = {}
const Header = (props: Props) => {
  return (
    <div>
      <ul className={style.menu}>
        <li className={style.menu__link}><Link href="" >Home</Link></li>
        <li  className={style.menu__link}><Link href="/about">About</Link></li>
        <li className={style.menu__link}><Link href="/product">Products</Link></li>
      </ul>
    </div>

  )
}

export default Header