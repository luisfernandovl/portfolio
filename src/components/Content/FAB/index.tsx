import Style from './fab.module.scss'
import IconArrowUp from '@/assets/icons/keyboard_arrow_up.svg';

export default function FAB() {
  return (
    <a id='fab' href='#' className={Style.container} role='button' title='Ir para o topo'>
      <IconArrowUp className={Style.icon}/>
    </a>
  );
}