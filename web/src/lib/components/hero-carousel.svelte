<script>
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, Download, ChevronLeft, ChevronRight } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let currentSlide = $state(0);
  let autoPlayInterval;

  const slides = [
    {
      id: 'que',
      title: '¿Reportes que se pierden en redes sociales y llamadas?',
      subtitle: 'TemuTrack centraliza todos los reportes ciudadanos en una plataforma única, ordenada y geo-referenciada.',
      description: 'Transforma la forma en que vecinos y municipios se comunican sobre problemas urbanos.',
      cta: 'Descargar app',
      ctaAlt: 'Solicitar demo',
      icon: '📍'
    },
    {
      id: 'por-que',
      title: 'Porque tu ciudad merece mejor comunicación',
      subtitle: 'Creemos que la participación ciudadana es clave para construir comunidades resilientes y transparentes.',
      description: 'Cada reporte cuenta. Cada voz importa. Juntos podemos mejorar nuestras ciudades.',
      cta: 'Únete a la comunidad',
      ctaAlt: 'Conocer más',
      icon: '🤝'
    },
    {
      id: 'como',
      title: 'Así funciona el cambio en tres pasos',
      subtitle: 'Un proceso simple que conecta necesidades reales con soluciones concretas.',
      description: 'Ciudadano reporta → Plataforma centraliza → Municipio gestiona y resuelve.',
      cta: 'Ver demo en vivo',
      ctaAlt: 'Documentación',
      icon: '✨'
    }
  ];

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    resetAutoPlay();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    resetAutoPlay();
  }

  function goToSlide(index) {
    currentSlide = index;
    resetAutoPlay();
  }

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 6000);
  }

  onMount(() => {
    autoPlayInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
    }, 6000);

    return () => clearInterval(autoPlayInterval);
  });

  let slide = $derived(slides[currentSlide]);
</script>

<section class="relative overflow-hidden pt-4 md:pt-4 lg:pt-4 pb-18 min-h-screen flex items-center">
  <div class="container px-4 md:px-6 mx-auto w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Content Side -->
      <div class="flex flex-col gap-6">
        <div class="text-5xl md:text-6xl font-bold mb-4">
          {slide.icon}
        </div>
        
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
          {slide.title}
        </h1>
        
        <p class="text-lg text-muted-foreground md:text-xl text-balance leading-relaxed max-w-[600px]">
          {slide.subtitle}
        </p>

        <p class="text-base md:text-lg text-muted-foreground/80">
          {slide.description}
        </p>

        <div class="flex flex-col sm:flex-row gap-4 mt-6">
          <Button size="lg" class="bg-secondary hover:bg-secondary/90 text-white text-base h-12 px-8">
            <Download class="mr-2 h-5 w-5" />
            {slide.cta}
          </Button>
          <Button variant="outline" size="lg" class="text-base h-12 px-8">
            {slide.ctaAlt}
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
        </div>

        <!-- Slide Indicators -->
        <div class="flex gap-2 mt-8">
          {#each slides as _, i}
            <button
              onclick={() => goToSlide(i)}
              class="h-2 transition-all {currentSlide === i ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/40'}"
              aria-label="Go to slide {i + 1}"
></button>
          {/each}
        </div>
      </div>

      <!-- Image Side / Visual -->
      <div class="relative mx-auto lg:ml-auto w-full max-w-[300px] lg:max-w-[400px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden hidden lg:block">
        <div class="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto z-20"></div>
        <div class="relative h-full w-full bg-white flex flex-col">
          <img 
            src="/telefono.png" 
            alt="TemuTrack app interface"
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border">
            <div class="flex items-center gap-3 mb-3">
              <div class="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
              </div>
              <div>
                <p class="font-bold text-sm">{slide.id === 'que' ? 'Bache peligroso' : 'Tu reporte'}</p>
                <p class="text-xs text-muted-foreground">Av. Principal • Hace 5 min</p>
              </div>
            </div>
            <div class="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
              <div class="h-full w-1/3 bg-secondary"></div>
            </div>
            <p class="text-[10px] text-right mt-1 text-muted-foreground">En revisión</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-4 lg:hidden">
      <button
        onclick={prevSlide}
        class="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>
      <button
        onclick={nextSlide}
        class="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight class="h-5 w-5" />
      </button>
    </div>
  </div>

  <!-- Background decoration -->
  <div class="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
  <div class="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-secondary/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/4"></div>
</section>
