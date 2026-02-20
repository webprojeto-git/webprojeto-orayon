export const handleRandomCtaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  try {
    const response = await fetch('https://workflow2.webprojeto.com.br/webhook/redirect-orayon', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source: 'site_principal', timestamp: Date.now() }),
    });

    if (!response.ok) throw new Error('HTTP error');

    const data = await response.json();

    if (data.success === true && data.redirect) {
      window.location.href = data.redirect;
    } else {
      throw new Error('Invalid response');
    }
  } catch {
    alert('Erro ao redirecionar. Tente novamente.');
  }
};
