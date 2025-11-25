<script>
  import '../app.css';
  export const prerender = true;
</script>

<svelte:head>
  <!-- Título de la página -->
  <title>Plataforma de Reportes Ciudadanos - Mejora tu Comunidad</title>
  
  <!-- Meta descripción para SEO -->
  <meta name="description" content="Reporta problemas urbanos de manera fácil y gratuita. Conecta con tu municipalidad y mejora tu comunidad con nuestra plataforma innovadora." />
  
  <!-- Open Graph para compartir en redes sociales (como WhatsApp, Facebook) -->
  <meta property="og:title" content="Plataforma de Reportes Ciudadanos - Mejora tu Comunidad" />
  <meta property="og:description" content="Reporta problemas urbanos de manera fácil y gratuita. Conecta con tu municipalidad y mejora tu comunidad con nuestra plataforma innovadora." />
  <meta property="og:image" content="https://temutrack.vercel.app/page-screen.png" /> <!-- Reemplaza con la URL de una imagen representativa (ej. logo o captura de la página) -->
  <meta property="og:url" content="https://temutrack.vercel.app" /> <!-- Reemplaza con la URL real de tu sitio -->
  <meta property="og:type" content="website" />
  
  <!-- Twitter Cards para compartir en Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:domain" content="temutrack.vercel.app" />
  <meta name="twitter:url" content="https://temutrack.vercel.app" />
  <meta name="twitter:title" content="Plataforma de Reportes Ciudadanos - Mejora tu Comunidad" />
  <meta name="twitter:description" content="Reporta problemas urbanos de manera fácil y gratuita. Conecta con tu municipalidad y mejora tu comunidad con nuestra plataforma innovadora." />
  <meta name="twitter:image" content="https://temutrack.vercel.app/page-screen.png" />

  <!-- Otros metadatos opcionales -->
  <meta name="author" content="Temutrack" />
  <meta name="keywords" content="reportes ciudadanos, municipalidad, problemas urbanos, comunidad" />
</svelte:head>

<slot />
