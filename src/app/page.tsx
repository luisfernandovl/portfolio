'use client';
import TopAppBar from '@/components/TopAppBar'
import BottomAppBar from '@/components/BottomAppBar';
import About from '@/components/Content/About';
import Projects from '@/components/Content/Projects';
import Skills from '@/components/Content/Skills';
import FAB from '@/components/Content/FAB';
import { useEffect, useState } from 'react';

export default function Home() {
  const [theme, setTheme] = useState('');

  function switchTheme() {
    if (theme === 'dark-theme') {
      setTheme('light-theme');
    }
    else {
      setTheme('dark-theme');
    }
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 19) {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  }, [])

  return (
    <body className={theme}>
      <TopAppBar switchTheme={switchTheme} />
      <main>
        <About />
        <Projects />
        <Skills />
        <FAB />
      </main>
      <BottomAppBar />
    </body>
  );
}
