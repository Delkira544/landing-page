<script>
  import { onMount, onDestroy } from 'svelte';
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
    const sections = document.querySelectorAll('.section');

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // No la volvemos a observar para que la animación ocurra solo una vez
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
        root: null, // viewport
      }
    );

    sections.forEach((section) => observer.observe(section));
  });

  onDestroy(() => {
    if (observer) observer.disconnect();
  });
</script>

<div class="min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
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
  /* Easing aún más suave (más “gomoso”) */
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
}

.section {
  height: 100vh;
  scroll-snap-align: start;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Estado inicial (igual que antes) */
  opacity: 0;
  transform: translateY(60px) scale(0.98);
  filter: blur(8px);

  /* ANTES: 900ms
     AHORA: 1400ms para que se note bien suave */
  transition:
    opacity 1400ms var(--ease-out-soft),
    transform 1400ms var(--ease-out-soft),
    filter 1400ms var(--ease-out-soft);

  will-change: opacity, transform, filter;
}

.section.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0);
}

  /* Opcional: respetar usuarios con "reduced motion" activado en el SO */
  @media (prefers-reduced-motion: reduce) {
    .section {
      transition: none;
      opacity: 1;
      transform: none;
      filter: none;
    }
  }
</style>
