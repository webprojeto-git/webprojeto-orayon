const CTA_LINKS = [
  "https://app.orayon.ai/lp/rodrigo",
  "https://app.orayon.ai/lp/webprojeto",
  "https://app.orayon.ai/lp/parceirodigital"
];

export const getRandomCtaLink = () => {
  const randomIndex = Math.floor(Math.random() * CTA_LINKS.length);
  return CTA_LINKS[randomIndex];
};

export const handleRandomCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const randomLink = getRandomCtaLink();
  window.open(randomLink, '_blank', 'noopener');
};
