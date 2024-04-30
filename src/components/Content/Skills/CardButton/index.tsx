import Style from './card-button.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
  Icon: any,
  label: string,
  link: string
}

export default function CardButton({ label, Icon, link }: Props) {
  const controls = useAnimation();
  const ref = useRef<HTMLLIElement>(null);

  // Função para verificar a posição do scroll e ativar a animação
  function handleScroll() {
    if (ref.current) {
      const elementTop = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 64) {
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

  // Define a animação desejada
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
    <motion.li
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animationVariants}>
      <a className={Style.container} href={link} target='_blank'>
        {label}
        <Icon className={Style.icon} />
      </a>
    </motion.li>
  )
}