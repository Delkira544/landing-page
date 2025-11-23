<script>
  import { onMount } from 'svelte';
  import Header from "$lib/components/header.svelte";
  import Hero from "$lib/components/hero.svelte";
  import HowItWorks from "$lib/components/how-it-works.svelte";
  import BenefitsCitizens from "$lib/components/benefits-citizens.svelte";
  import BenefitsMunicipality from "$lib/components/benefits-municipality.svelte";
  import SocialProof from "$lib/components/social-proof.svelte";
  import WhyCentralize from "$lib/components/why-centralize.svelte";
  import FAQ from "$lib/components/faq.svelte";
  import CTA from "$lib/components/cta.svelte";
  import Footer from "$lib/components/footer.svelte";

  let observer;

  onMount(() => {
    const container = document.querySelector('.snap-container');
    const sections = Array.from(document.querySelectorAll('.section'));

    // Configurar observer para animaciones
    const isDesktop = window.innerWidth > 768;
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isDesktop ? 0.3 : 0.1, // Threshold más bajo en móvil para activar antes
        root: isDesktop ? container : null // En desktop, root es el container; en móvil, la ventana
      }
    );

    sections.forEach((section) => observer.observe(section));
  });
</script>

<div class="app-root min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
  <Header />

  <main class="snap-container">
    <section class="section visible"><Hero /></section>
    <section class="section"><HowItWorks /></section>
    <section class="section"><BenefitsCitizens /></section>
    <section class="section"><BenefitsMunicipality /></section>
    <section class="section"><SocialProof /></section>
    <section class="section"><WhyCentralize /></section>
    <section class="section"><FAQ /></section>
    <section class="section"><CTA /></section>
  </main>

  <Footer />
</div>

<style>
  :root {
    /* easing suave */
    --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  }

  /* IMPORTANTE: que no scrollee el body, solo el contenedor */
  html, body {
    height: 100%;
    margin: 0;
    overflow: hidden;
  }

  .app-root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .snap-container {
    /* ocupa el alto disponible (bajo el header, si lo tienes estático) */
    height: 100vh;
    overflow-y: auto;

    /* scroll por sección */
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }

  .section {
    /* cada sección = “página” */
    height: 100vh;
    scroll-snap-align: start;
    scroll-snap-stop: always;

    display: flex;
    justify-content: center;
    align-items: center;

    /* Animación muy suave */
    opacity: 0;
    transform: translateY(60px) scale(0.98);
    filter: blur(8px);

    transition:
      opacity 1600ms var(--ease-out-soft),
      transform 1600ms var(--ease-out-soft),
      filter 1600ms var(--ease-out-soft);

    will-change: opacity, transform, filter;
  }

  .section.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }

  @media (prefers-reduced-motion: reduce) {
    .section {
      transition: none;
      opacity: 1;
      transform: none;
      filter: none;
    }
  }

  /* Media query para móviles (ancho <= 768px): deshabilitar scroll-snap y animaciones */
  @media (max-width: 768px) {
    html, body {
      overflow: auto; /* Permitir scroll normal en el body */
    }

    .app-root {
      height: auto; /* Altura automática para contenido */
    }

    .snap-container {
      height: auto; /* Altura automática */
      overflow-y: visible; /* Sin overflow restringido */
      scroll-snap-type: none; /* Quitar snap */
      scroll-behavior: auto; /* Comportamiento normal */
    }

    .section {
      height: auto; /* Altura automática para secciones */
      scroll-snap-align: none; /* Quitar snap */
      /* Animación desde abajo en móvil */
      opacity: 0;
      transform: translateY(100px);
      filter: blur(4px);
      transition:
        opacity 1200ms var(--ease-out-soft),
        transform 1200ms var(--ease-out-soft),
        filter 1200ms var(--ease-out-soft);
      will-change: opacity, transform, filter;
      /* Espacio entre secciones para marcarlas */
      margin-bottom: 4rem;
      padding: 2rem 0;
    }

    .section.visible {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  }
</style>

