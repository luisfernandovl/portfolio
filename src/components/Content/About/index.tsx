import ProfilePic from '@/assets/images/profile-picture-p.jpg';
import Style from './about.module.scss';
import Image from "next/image";
import LinkedinLogo from '@/assets/logos/linkedin.svg';
import GitHubLogo from '@/assets/logos/github.svg';
import GmailLogo from '@/assets/logos/gmail_icon.svg';
import { motion } from 'framer-motion';

export default function About() {

  // Define a animação
  const animationVariants = {
    hidden: {
      transform: 'translateZ(-160px) translateX(-100px)',
      opacity: '0%'
    },
    visible: {
      transform: 'translateZ(0px) translateX(0px)',
      opacity: '100%',
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], type: 'both' }
    },
  };

  return (
    <section id={'sobre_mim'} className={Style.container}>
      <h2 className={Style.title}>Sobre mim</h2>
      <motion.div id='card_introduce' className={`${Style.introduce}`}
        animate={animationVariants.visible}
        initial={animationVariants.hidden}
      >
        <div className={Style.social_media}>
          <Image className={Style.profile_pic} src={ProfilePic} alt="Foto do desenvolvedor" title='Foto do desenvolvedor' />
          <ul className={Style.list}>
            <li>
              <a className={Style.item} href='https://www.linkedin.com/in/luisfernandovl/' target='_blank' title='Conheça meu LinkedIn'>
                <LinkedinLogo className={Style.icon} />
                LinkedIn
              </a>
            </li>
            <li>
              <a className={Style.item} href="mailto:luisfernandovl.dev@gmail.com" target='_blank' title='Me envie um email'>
                <GmailLogo className={Style.icon} />
                Gmail
              </a>
            </li>
            <li>
              <a className={Style.item} href='https://github.com/luisfernandovl' target='_blank' title='Visite meu GitHub'>
                <GitHubLogo className={Style.icon} />
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className={Style.infos}>
          <h2 className={Style.name}>Luis Fernando Leal</h2>
          <p className={Style.text}>Olá! Comecei minha jornada em 2018, quando iniciei na programação pela UNESP, no Colégio Técnico Industrial de Bauru. Desde então, crio sites, aplicativos e desenvolvo softwares em geral.</p>
          <p className={Style.text}>Possuo domínio em tecnologias usadas no Front-end da web (HTML, CSS, JavaScript, React com TypeScript e Sass) e tenho experiência profissional como Desenvolvedor Full Stack em C# (C Sharp).</p>
        </div>
      </motion.div>
    </section>
  );
}