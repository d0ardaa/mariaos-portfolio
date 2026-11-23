'use client';
import { useEffect } from 'react';

export default function Homepage() {
  useEffect(() => {
    const stored = localStorage.getItem('mariaos-language');
    const browser = navigator.language.toLowerCase();
    const locale = ['pt', 'es', 'en'].includes(stored) ? stored : browser.startsWith('es') ? 'es' : browser.startsWith('en') ? 'en' : 'pt';
    window.location.replace('/' + locale + '/');
  }, []);
  return <main className="route-redirect"><p>MariaOS 98</p><a href="/pt/">Entrar / Enter / Entrar →</a></main>;
}
