import Card from '@/components/Content/Projects/Card';
import Style from './projects.module.scss';
import EventTrackerGIF from '../../../assets/gifs/event_tracker.gif';
import EventTrackerJPG from '../../../assets/gifs/event_tracker.jpg';
import SorteadorGIF from '@/assets/gifs/sorteador.gif';
import SorteadorJPG from '@/assets/gifs/sorteador.jpg';
import PortfolioGIF from '@/assets/gifs/portfolio_old.gif';
import PortfolioJPG from '@/assets/gifs/portfolio_old.jpg';
export default function Projects() {

  return (
    <section id={'projetos'} className={Style.container}>
      <h2 className={Style.title}>Projetos</h2>
      <ul id='project_list' className={Style.list_view}>
        <Card gif={EventTrackerGIF} image={EventTrackerJPG} title='Event Tracker' description='Sistema de agenda' tags='#React #SCSS #TypeScript' link='https://eventtracker-luisfernandovl.vercel.app/' />
        <Card gif={SorteadorGIF} image={SorteadorJPG} title='Sorteador de Amigo Secreto' description='Jogo de sorteio de amigo secreto' tags='#React #CSS #TypeScript' link='https://sorteadoramigosecreto-luisfernandovl.vercel.app/' />
        <Card gif={PortfolioGIF} image={PortfolioJPG} title='Portfólio [Legado]' description='Portfólio anterior a este.' tags='#HTML #CSS #JavaScript' link='https://luisfernandovl-old.vercel.app' />        
      </ul>
    </section>
  );
}
