import Card from '@/components/Content/Projects/Card';
import Style from './projects.module.scss';
import EventTrackerGIF from '../../../assets/gifs/event_tracker.gif';
import EventTrackerJPG from '../../../assets/gifs/event_tracker.jpg';
import SorteadorGIF from '@/assets/gifs/sorteador.gif';
import SorteadorJPG from '@/assets/gifs/sorteador.jpg';
import PortfolioGIF from '@/assets/gifs/portfolio_old.gif';
import PortfolioJPG from '@/assets/gifs/portfolio_old.jpg';
import PontoCafeGIF from '@/assets/gifs/ponto_cafe.gif';
import PontoCafeJPG from '@/assets/gifs/ponto_cafe.jpg';
import PontoCafeFigmaGIF from '@/assets/gifs/ponto_cafe_figma.gif';
import PontoCafeFigmaJPG from '@/assets/gifs/ponto_cafe_figma.jpg';
import DesignDiarioFigmaGIF from '@/assets/gifs/design_diario_figma.gif';
import DesignDiarioFigmaJPG from '@/assets/gifs/design_diario_figma.jpg';
export default function Projects() {

  return (
    <section id={'projetos'} className={Style.container}>
      <h2 className={Style.title}>Projetos</h2>
      <ul id='project_list' className={Style.list_view}>
        <Card gif={EventTrackerGIF} image={EventTrackerJPG} title='Event Tracker' description='Sistema de agenda' tags='#React #SCSS #TypeScript' link='https://eventtracker-luisfernandovl.vercel.app/' />
        <Card gif={SorteadorGIF} image={SorteadorJPG} title='Sorteador de Amigo Secreto' description='Jogo de sorteio de amigo secreto' tags='#React #CSS #TypeScript' link='https://sorteadoramigosecreto-luisfernandovl.vercel.app/' />
        <Card gif={PortfolioGIF} image={PortfolioJPG} title='Portfólio [Legado]' description='Portfólio anterior a este.' tags='#HTML #CSS #JavaScript' link='https://luisfernandovl-old.vercel.app' />
        <Card gif={PontoCafeGIF} image={PontoCafeJPG} title='Ponto Café' description='Cardápio virtual de uma cafeteria fictícia. [Grande atualização em breve!]' tags='#HTML #CSS #JavaScript' link='https://luisfernandovl.github.io/pontocafe/' />
        <Card gif={PontoCafeFigmaGIF} image={PontoCafeFigmaJPG} title='Ponto Café - Protótipo UI/UX' description='Design do site Ponto Café desenvolvido no Figma' tags='#Figma' link='https://www.figma.com/file/ebQqsMEubmB0Gxdt4JTxGJ/Ponto-Caf%C3%A9-v1.0.0?node-id=0%3A1' />
        <Card gif={DesignDiarioFigmaGIF} image={DesignDiarioFigmaJPG} title='Design Diário - Protótipo UI/UX' description='Design desenvolvido no Figma' tags='#Figma' link='https://www.figma.com/file/2CwKMoTsPDxBEdDsKsbFDe/Design-Di%C3%A1rio?node-id=0%3A1' />
      </ul>
    </section>
  );
}
