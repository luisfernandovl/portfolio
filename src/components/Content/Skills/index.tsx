import CardButton from './CardButton';
import HTML_Logo from '@/assets/logos/html5.svg';
import CSS_Logo from '@/assets/logos/css3-alt.svg';
import JavaScript_Logo from '@/assets/logos/js.svg';
import TypeScript_Logo from '@/assets/logos/ts-logo.svg';
import React_Logo from '@/assets/logos/react.svg';
import Sass_Logo from '@/assets/logos/sass.svg';
import Bootstrap_Logo from '@/assets/logos/bootstrap.svg';
import Figma_Logo from '@/assets/logos/figma.svg';
import CSharp_Logo from '@/assets/logos/logo_c_sharp.svg';
import NET_Logo from '@/assets/logos/microsoft_net.svg';
import PostgreSQL_Logo from '@/assets/logos/postgresql_elephant.svg';
import Style from './skills.module.scss';

export default function Skills() {

  return (
    <section id={'habilidades'} className={Style.container}>
      <h2 className={Style.title}>Habilidades principais</h2>
      <ul id='skill_list' className={Style.list_view}>
        <CardButton label='HTML' Icon={HTML_Logo} link="https://developer.mozilla.org/pt-BR/docs/Web/HTML" />
        <CardButton label='CSS' Icon={CSS_Logo} link="https://developer.mozilla.org/pt-BR/docs/Web/CSS" />
        <CardButton label='JavaScript' Icon={JavaScript_Logo} link="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" />
        <CardButton label='TypeScript' Icon={TypeScript_Logo} link="https://www.typescriptlang.org/pt/" />
        <CardButton label='React' Icon={React_Logo} link="https://react.dev" />
        <CardButton label='Sass' Icon={Sass_Logo} link="https://sass-lang.com" />
        <CardButton label='Bootstrap' Icon={Bootstrap_Logo} link="https://getbootstrap.com" />
        <CardButton label='Figma' Icon={Figma_Logo} link="https://www.figma.com" />
        <CardButton label='C Sharp' Icon={CSharp_Logo} link="https://learn.microsoft.com/pt-br/dotnet/csharp/tour-of-csharp" />
        <CardButton label='.NET' Icon={NET_Logo} link="https://learn.microsoft.com/pt-br/dotnet/core/introduction" />
        <CardButton label='PostgreSQL' Icon={PostgreSQL_Logo} link="https://www.postgresql.org" />
      </ul>
    </section>
  );
}