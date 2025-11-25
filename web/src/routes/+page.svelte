<script>
  import { onMount } from 'svelte';
  import Header from "$lib/components/header.svelte";
  import HeroCarousel from "$lib/components/hero-carousel.svelte";
  import ValueProposition from "$lib/components/value-proposition.svelte";
  import PricingPlans from "$lib/components/pricing-plans.svelte";
  import HowItWorks from "$lib/components/how-it-works.svelte";
  import BenefitsCitizens from "$lib/components/benefits-citizens.svelte";
  import BenefitsMunicipality from "$lib/components/benefits-municipality.svelte";
  import SocialProof from "$lib/components/social-proof.svelte";
  import BlogSection from "$lib/components/blog-section.svelte";
  import CommunitySection from "$lib/components/community-section.svelte";
  import TeamSection from "$lib/components/team-section.svelte";
  import ContactSection from "$lib/components/contact-section.svelte";
  import FaqImproved from "$lib/components/faq-improved.svelte";
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
        threshold: isDesktop ? 0.3 : 0.1,
        root: isDesktop ? container : null
      }
    );

    sections.forEach((section) => observer.observe(section));
  });
</script>

<div class="app-root min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
  <Header />

  <main class="snap-container">
    <section class="section visible"><HeroCarousel /></section>
    <section class="section"><ValueProposition /></section>
    <section class="section"><HowItWorks /></section>
    <section class="section"><BenefitsCitizens /></section>
    <section class="section"><BenefitsMunicipality /></section>
    <section class="section"><PricingPlans /></section>
    <section class="section"><SocialProof /></section>
    <section class="section"><BlogSection /></section>
    <section class="section"><CommunitySection /></section>
    <section class="section"><TeamSection /></section>
    <section class="section"><ContactSection /></section>
    <section class="section"><FaqImproved /></section>
  </main>

  <Footer />
</div>

<style>
  :root {
    --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
  }

  .app-root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .snap-container {
    height: 100vh;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
  }

  .section {
    min-height: calc(100vh - 4rem); /* Cambiado: resta la altura del header (h-16 = 4rem) para que el contenido se acomode correctamente */
    scroll-snap-align: start;
    scroll-snap-stop: always;
    display: flex;
    justify-content: center;
    align-items: center;
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

  @media (max-width: 768px) {
    .app-root {
      height: auto;
    }

    .snap-container {
      height: auto;
      overflow-y: visible;
      scroll-snap-type: none;
      scroll-behavior: auto;
    }

    .section {
      min-height: auto;
      scroll-snap-align: none;
      opacity: 0;
      transform: translateY(100px);
      filter: blur(4px);
      transition:
        opacity 1200ms var(--ease-out-soft),
        transform 1200ms var(--ease-out-soft),
        filter 1200ms var(--ease-out-soft);
      will-change: opacity, transform, filter;
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
