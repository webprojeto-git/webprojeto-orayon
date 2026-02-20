export const handleRandomCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const params = new URLSearchParams({
    source: 'site_principal',
    timestamp: String(Date.now()),
  });

  // Navigate directly to the webhook — n8n responds with HTTP 302 redirect.
  // This completely bypasses CORS since it's a browser navigation, not a fetch.
  window.location.href = `https://workflow2.webprojeto.com.br/webhook/form-orayon?${params.toString()}`;
};
