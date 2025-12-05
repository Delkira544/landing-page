<script>
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, ChevronLeft, ChevronRight, Camera, MapPin, CheckCircle2, FileWarning, Mail, Check } from 'lucide-svelte';
  import { onMount, onDestroy } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  let currentSlide = $state(0);
  let autoPlayInterval;

  // Datos estrictamente basados en el documento "TemuTrack"
  const slides = [
    {
      id: 'que-hacemos',
      visualType: 'hero', // Mujer + App Flotante
      title: '¿Cansada de que los mismos hoyos y veredas rotas sigan ahí todos los días?',
      subtitle: 'Con TemuTrack reportas problemas de tu barrio en segundos, sigues tu denuncia y ves qué está haciendo el municipio, todo desde tu celular.',
      description: 'Ordenamos los reportes ciudadanos en un solo lugar, con mapa, estados y prioridades claras.',
      ctaPrimary: 'Reportar un problema ahora',
      ctaPrimarySubtext: 'Toma menos de 1 minuto y es gratis.',
      ctaSecondary: 'Ver demo para municipios',
      ctaSecondarySubtext: 'Centraliza los reportes ciudadanos.',
      color: 'bg-[#2ECC71]'
    },
    {
      id: 'por-que',
      visualType: 'chaos-order', // Ilustración Caos vs Orden
      title: 'Tus denuncias no deberían perderse entre correos, llamadas y comentarios en Facebook.',
      subtitle: 'Del caos burocrático a la transparencia digital.',
      description: 'En Temuco, muchos problemas se reportan pero pocos se siguen. TemuTrack nace para dar trazabilidad a esos reclamos y convertirlos en soluciones.',
      ctaPrimary: 'Conoce nuestra misión',
      ctaPrimarySubtext: 'Recuperando la confianza ciudadana.',
      ctaSecondary: null, // Slide enfocado en misión
      color: 'bg-blue-500'
    },
    {
      id: 'como-funciona',
      visualType: 'process', // Tríptico de celulares
      title: 'Saca la foto, envía el reporte y sigue el avance desde tu celular.',
      subtitle: 'Tan simple como enviar un mensaje.',
      // Lista de pasos específica para este slide
      steps: [
        { icon: Camera, title: '1. Captura', text: 'Saca una foto y marca el lugar.' },
        { icon: MapPin, title: '2. Envía', text: 'Tu reporte llega directo al municipio.' },
        { icon: CheckCircle2, title: '3. Sigue', text: 'Revisa cuando cambie a "Resuelto".' }
      ],
      ctaPrimary: 'Descargar App',
      ctaPrimarySubtext: 'Disponible en iOS y Android.',
      ctaSecondary: 'Ver tutorial',
      ctaSecondarySubtext: null,
      color: 'bg-indigo-500'
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
    }, 8000);
  }

  onMount(() => {
    resetAutoPlay();
  });

  onDestroy(() => {
    clearInterval(autoPlayInterval);
  });

  let slide = $derived(slides[currentSlide]);
</script>

<section class="relative overflow-hidden pt-8 md:pt-12 lg:pt-20 pb-16 min-h-[90vh] flex items-center bg-gradient-to-b from-slate-50 to-white">
  
  <div class="container px-4 md:px-6 mx-auto w-full relative z-10">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      
      <!-- COLUMNA IZQUIERDA: TEXTO Y CONTENIDO -->
      <!-- Usamos {#key} para reiniciar la animación de texto al cambiar slide -->
      {#key currentSlide}
      <div 
        in:fly={{ y: 20, duration: 500, delay: 100 }} 
        class="flex flex-col gap-6 lg:gap-8 text-left order-2 lg:order-1"
      >
        
        <!-- Título Principal -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 leading-tight lg:leading-[1.1]">
          {slide.title}
        </h1>
        
        <!-- Subtítulo -->
        <p class="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
          {slide.subtitle}
        </p>

        <!-- Contenido Condicional: Descripción Normal o Pasos (Slide 3) -->
        {#if slide.steps}
          <!-- Lógica específica para el slide "Cómo funciona" -->
          <div class="grid gap-4 mt-2">
            {#each slide.steps as step}
              <div class="flex items-start gap-4 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
                <div class="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                  <step.icon class="h-5 w-5" />
                </div>
                <div>
                  <h3 class="font-bold text-slate-900">{step.title}</h3>
                  <p class="text-sm text-slate-600">{step.text}</p>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <!-- Descripción estándar para otros slides -->
          <p class="text-base md:text-lg text-slate-600 leading-relaxed max-w-[560px]">
            {slide.description}
          </p>
        {/if}

        <!-- Botones CTA -->
        <div class="flex flex-col sm:flex-row gap-4 mt-4 lg:mt-6 items-start">
          
          <div class="space-y-2 w-full sm:w-auto">
            <Button 
              size="lg" 
              class="{slide.color} hover:opacity-90 text-white text-base lg:text-lg font-semibold h-14 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full"
            >
              {slide.ctaPrimary}
            </Button>
            {#if slide.ctaPrimarySubtext}
              <p class="text-xs text-slate-500 font-medium text-center sm:text-left px-1">
                {slide.ctaPrimarySubtext}
              </p>
            {/if}
          </div>

          {#if slide.ctaSecondary}
            <div class="space-y-2 w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                class="border-2 border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-base lg:text-lg font-semibold h-14 px-6 rounded-xl transition-all duration-200 w-full"
              >
                {slide.ctaSecondary}
                <ArrowRight class="ml-2 h-4 w-4" />
              </Button>
              {#if slide.ctaSecondarySubtext}
                <p class="text-xs text-slate-500 text-center sm:text-left px-1">
                  {slide.ctaSecondarySubtext}
                </p>
              {/if}
            </div>
          {/if}
        </div>

        <!-- Indicadores de Slide (Puntos) -->
        <div class="flex gap-3 mt-4">
          {#each slides as s, i}
            <button
              onclick={() => goToSlide(i)}
              class="h-2 transition-all duration-300 rounded-full {currentSlide === i ? `w-8 ${s.color}` : 'w-2 bg-slate-300 hover:bg-slate-400'}"
              aria-label="Ir al slide {i + 1}"
            ></button>
          {/each}
        </div>

      </div>
      {/key}

      <!-- COLUMNA DERECHA: VISUALES DINÁMICOS -->
      <!-- Aquí es donde cambiamos la composición visual según el tipo de slide -->
      <div class="relative order-1 lg:order-2 h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-end perspective-1000">
        
        {#key currentSlide}
          <div in:fade={{ duration: 400 }} class="absolute inset-0 flex items-center justify-center lg:justify-end w-full h-full">
            
            <!-- VISUAL TIPO 1: HERO (Mujer + App) -->
            {#if slide.visualType === 'hero'}
              <div class="relative w-full max-w-[500px]">
                <!-- Imagen Principal (Foto Mujer) -->
                <div class="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200 border-4 border-white aspect-[4/5] lg:aspect-square">
                   <!-- Placeholder para la imagen generada "Mujer con hijo y bache" -->
                   <img src="/mujer-temuco-calle.jpg" alt="Mujer reportando bache" class="w-full h-full object-cover" />
                   <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                <!-- Elemento Flotante: Mockup App -->
                <div class="absolute -right-4 lg:-right-12 top-10 w-40 lg:w-48 transform rotate-6 shadow-2xl rounded-[2.5rem] bg-black p-2 border border-slate-800 animate-float">
                  <div class="bg-white rounded-[2rem] h-80 overflow-hidden relative">
                    <!-- Mapa simulado -->
                    <div class="absolute inset-0 bg-slate-100">
                      <div class="absolute top-1/3 left-1/4 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <div class="absolute top-1/2 right-1/3 w-4 h-4 bg-red-500 rounded-full shadow-lg"></div>
                      <!-- Botón Reportar en UI -->
                      <div class="absolute bottom-4 left-4 right-4 h-10 bg-[#2ECC71] rounded-lg flex items-center justify-center text-white font-bold text-xs">
                        REPORTAR
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            <!-- VISUAL TIPO 2: CAOS VS ORDEN -->
            {:else if slide.visualType === 'chaos-order'}
              <div class="relative w-full max-w-[550px] flex items-center justify-center gap-4">
                
                <!-- Lado Izquierdo: CAOS (Desvanecido/Borroso) -->
                <div class="relative w-1/2 opacity-60 scale-90 grayscale blur-[1px]">
                  <div class="absolute -top-10 -left-4 bg-white p-3 shadow-lg rounded-lg rotate-[-12deg] z-10">
                    <FileWarning class="text-red-500 h-8 w-8" />
                  </div>
                  <div class="absolute top-20 right-0 bg-white p-3 shadow-lg rounded-lg rotate-[15deg] z-10">
                    <Mail class="text-orange-500 h-8 w-8" />
                  </div>
                  <div class="bg-slate-100 rounded-2xl p-6 h-64 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2">
                    <p class="font-bold text-slate-400 text-xl">ANTES</p>
                    <p class="text-xs text-center text-slate-400">Denuncias perdidas<br>sin respuesta</p>
                  </div>
                </div>

                <!-- Flecha Transición -->
                <div class="z-20 bg-white rounded-full p-2 shadow-xl">
                  <ArrowRight class="h-6 w-6 text-blue-500" />
                </div>

                <!-- Lado Derecho: ORDEN (Nítido/Destacado) -->
                <div class="relative w-1/2 scale-105 z-10">
                   <div class="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
                      <div class="bg-blue-500 p-4 text-white text-center font-bold text-sm">
                        PANEL TEMUTRACK
                      </div>
                      <div class="p-4 space-y-3">
                        <div class="flex items-center gap-2 text-xs p-2 bg-green-50 rounded-lg border border-green-100">
                           <CheckCircle2 class="h-4 w-4 text-green-600" />
                           <span class="font-medium text-slate-700">Bache (Resuelto)</span>
                        </div>
                        <div class="flex items-center gap-2 text-xs p-2 bg-blue-50 rounded-lg border border-blue-100">
                           <div class="h-4 w-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin"></div>
                           <span class="font-medium text-slate-700">Luminaria (En proceso)</span>
                        </div>
                      </div>
                   </div>
                </div>
              </div>

            <!-- VISUAL TIPO 3: PROCESO (TRÍPTICO) -->
            {:else if slide.visualType === 'process'}
              <div class="relative w-full max-w-[600px] h-full flex items-center justify-center">
                <!-- Conexión de linea -->
                <div class="absolute top-1/2 left-10 right-10 h-1 bg-slate-200 -z-10 rounded-full"></div>

                <div class="flex justify-between w-full items-center">
                  <!-- Paso 1 -->
                  <div class="relative group">
                     <div class="w-24 h-48 bg-slate-800 rounded-2xl shadow-xl border-4 border-slate-900 p-1 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform bg-white">
                        <Camera class="h-8 w-8 text-indigo-500 mb-2" />
                        <div class="h-2 w-12 bg-slate-100 rounded-full"></div>
                     </div>
                     <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-sm text-slate-500">1. Foto</div>
                  </div>

                  <!-- Flecha -->
                  <ArrowRight class="text-slate-300 h-6 w-6" />

                  <!-- Paso 2 -->
                  <div class="relative group">
                     <div class="w-24 h-48 bg-slate-800 rounded-2xl shadow-xl border-4 border-slate-900 p-1 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform delay-75 bg-white">
                        <MapPin class="h-8 w-8 text-indigo-500 mb-2" />
                        <div class="h-2 w-12 bg-slate-100 rounded-full"></div>
                     </div>
                     <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-sm text-slate-500">2. Mapa</div>
                  </div>

                  <!-- Flecha -->
                  <ArrowRight class="text-slate-300 h-6 w-6" />

                  <!-- Paso 3 -->
                  <div class="relative group">
                     <div class="w-24 h-48 bg-slate-800 rounded-2xl shadow-xl border-4 border-slate-900 p-1 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform delay-150 bg-white">
                        <div class="bg-green-100 p-2 rounded-full mb-2">
                           <Check class="h-6 w-6 text-green-600" />
                        </div>
                        <div class="h-2 w-12 bg-slate-100 rounded-full"></div>
                     </div>
                     <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold text-sm text-slate-500">3. Listo</div>
                  </div>
                </div>
              </div>
            {/if}

          </div>
        {/key}
      </div>

    </div>

    <!-- Navegación móvil (Flechas) -->
    <div class="flex justify-center gap-6 mt-12 lg:hidden">
      <button onclick={prevSlide} class="h-12 w-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
        <ChevronLeft class="h-6 w-6" />
      </button>
      <button onclick={nextSlide} class="h-12 w-12 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-lg active:scale-95 transition-transform">
        <ChevronRight class="h-6 w-6" />
      </button>
    </div>

  </div>

  <!-- Decoración de fondo ambiental -->
  <div class="absolute top-0 right-0 -z-10 h-[600px] w-[600px] {slide.color} opacity-5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4 transition-colors duration-1000"></div>
</section>

<style>
  .perspective-1000 {
    perspective: 1000px;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(6deg); }
    50% { transform: translateY(-15px) rotate(6deg); }
  }
  
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
</style>