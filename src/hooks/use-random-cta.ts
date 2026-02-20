export const handleRandomCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  window.location.href = '/form';
};
