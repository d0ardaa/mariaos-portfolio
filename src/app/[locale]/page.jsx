import { notFound } from 'next/navigation';
import Desktop from '../../components/Desktop';
import { LOCALES, messages } from '../../content/messages';

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) return {};
  return {
    title: `MariaOS 98 — ${messages[locale].portfolio}`,
    description: messages[locale].metaDescription,
    alternates: { languages: { 'pt-BR': '/pt/', es: '/es/', en: '/en/' } }
  };
}
export default async function LocalePage({ params }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale)) notFound();
  return <Desktop locale={locale} />;
}
