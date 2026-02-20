export const handleRandomCtaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  try {
    // Using text/plain avoids CORS preflight (OPTIONS), so the POST reaches n8n directly.
    // n8n must return Access-Control-Allow-Origin: * in the response headers.
    const response = await fetch('https://workflow2.webprojeto.com.br/webhook/redirect-orayon', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
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
