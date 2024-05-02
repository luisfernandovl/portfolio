import Image, { StaticImageData } from 'next/image';
import Style from './card.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  gif: StaticImageData | string,
  image: StaticImageData | string,
  title: string,
  description: string,
  tags: string,
  link: string
}

export default function Card({ gif, image, title, description, tags, link }: Props) {

  const [hover, setHover] = useState(false); //Estado do cartão (hover do mouse e touch em cima)

  const controls = useAnimation(); //controla as variações da animação
  const ref = useRef<HTMLLIElement>(null); // Cria referência no cartão

  // Função para verificar a posição do scroll e ativar a animação
  function handleScroll() {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 80) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  // Defina a animação desejada
  const animationVariants = {
    hidden: {
      transform: 'translateZ(-160px) translateX(-100px)',
      opacity: '0%',
    },
    visible: {
      transform: 'translateZ(0px) translateX(0px)',
      opacity: '100%',
      transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94], type: 'both' }
    },
  };
  return (
    <motion.li onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}
    >
      <a href={`${link}`} target='_blank' className={Style.container}>
        <div>
          {hover ? <Image className={Style.midia} src={gif} alt='' /> : <Image className={Style.midia} src={image} alt='' />}
          <div className={Style.details}>
            <h3 className={Style.title}>{title}</h3>
            <p className={Style.description}>{description}</p>
            <p className={Style.tags}>{tags}</p>
          </div>
        </div>
        <div className={Style.button}>Visitar</div>
      </a>

    </motion.li>
  );
}