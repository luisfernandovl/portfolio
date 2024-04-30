import Style from './top-app-bar.module.scss';
import Logo from '@/assets/images/logo.svg';
import IconContrast from '@/assets/icons/contrast.svg';
import IconMenu from '@/assets/icons/menu.svg';
import Menu from './Menu';
import { useEffect, useRef, useState } from 'react';

interface Props {
  switchTheme: () => void;
}

export default function TopAppBar({ switchTheme }: Props) {

  const [scrolled, setScrolled] = useState(false); //Estado do scroll da página
  const [isMenuOpen, setMenuOpening] = useState(false); //Estado do menu (aberto/fechado)

  const ref = useRef<HTMLSpanElement>(null); //Cria uma referência no botão do menu

  //O Menu abre ao clicar no botão. Ao clicar em qlqr outro lugar ele fecha
  function showingMenu(target: Node) {
    if (ref.current?.contains(target)) {
      setMenuOpening(true);
    }
    else {
      setMenuOpening(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => setScrolled(window.scrollY > 0));

    window.addEventListener('click', (event) => showingMenu(event.target as Node));

  }, [])

  return (
    <header className={`${Style.container} ${scrolled ? Style.scroll : ''}`}>
      <a className={Style.logo} href="#" title='Logo Luis F - LinF'>
        <Logo className={Style.svg} />
      </a>
      <nav className={Style.nav}>
        <span className={Style.icon_button} onClick={switchTheme} role='button' title='Trocar tema'>
          <IconContrast className={Style.svg} />
        </span>
        <span ref={ref} id='icon-button-menu' className={Style.icon_button} role='button' title='Exibir menu'>
          <IconMenu id='icon-menu' className={Style.svg} />
        </span>
        <Menu isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
}