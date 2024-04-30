import Style from './bottom-app-bar.module.scss';

export default function BottomAppBar() {
  return (
    <footer className={Style.container}>
      <small className={Style.copyright}><a href='#'>Luis F - LinF © 2024. Direitos reservados.</a></small>
    </footer>
  );
}