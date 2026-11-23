import '../globals.css';

export const metadata = {
  title: 'MariaOS 98 — Portfólio / Portfolio',
  description: 'Portfolio de desenvolvimento, dados e automacao, inspirado no Windows 98.',
  icons: { icon: '/favicon.svg' }
};

export default function RootEntryLayout({ children }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
