import Style from './menu.module.scss';
import IconPerson from '@/assets/icons/person.svg';
import IconTerminal from '@/assets/icons/terminal.svg';
import IconTrendingUp from '@/assets/icons/trending_up.svg';

interface Props {
  isMenuOpen: boolean,
}

export default function Menu({ isMenuOpen }: Props) {

  return (
    <menu id='menu' className={`${Style.container} ${isMenuOpen ? Style.showing : ''}`} role='menu' title='Menu'>
      <li className={Style.item} role='menuitem' title='Sobre mim'>
        <a href="#sobre_mim">
          <IconPerson className={Style.icon} />
          Sobre mim
        </a>
      </li>
      <li className={Style.item} role='menuitem' title='Projetos'>
        <a href="#projetos">
          <IconTerminal className={Style.icon} />
          Projetos
        </a>
      </li>
      <li className={Style.item} role='menuitem' title='Habilidades'>
        <a href="#habilidades">
          <IconTrendingUp className={Style.icon} />
          Habilidades
        </a>
      </li>
    </menu>
  );
}