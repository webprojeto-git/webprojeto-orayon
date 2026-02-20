export const handleRandomCtaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();

  const params = new URLSearchParams({
    source: 'site_principal',
    timestamp: String(Date.now()),
  });

  try {
    // Webhook responds with JSON { success: true, redirect: "https://app.orayon.ai/lp/parceiro" }
    const response = await fetch(
      `https://workflow2.webprojeto.com.br/webhook/form-orayon?${params.toString()}`
    );
    const data = await response.json();

    if (data?.redirect) {
      window.location.href = data.redirect;
    } else {
      console.error('Webhook response missing redirect URL', data);
    }
  } catch (err) {
    console.error('Failed to reach webhook', err);
  }
};
