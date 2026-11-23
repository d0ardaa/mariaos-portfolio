import '../globals.css';

export const metadata = { icons: { icon: '/favicon.svg' } };

export default async function LocalizedRootLayout({ children, params }) {
  const { locale } = await params;
  const lang = locale === 'pt' ? 'pt-BR' : locale;
  return <html lang={lang}><body>{children}</body></html>;
}
