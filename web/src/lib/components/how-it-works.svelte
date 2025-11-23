<script>
  import { Camera, Send, CheckCircle2 } from 'lucide-svelte';
  
  const steps = [
    {
      icon: Camera,
      title: "Captura",
      description: "Toma una foto y describe el problema urbano que encontraste en tu camino."
    },
    {
      icon: Send,
      title: "Reporta",
      description: "El reporte se envía automáticamente al sistema central de la municipalidad con tu ubicación."
    },
    {
      icon: CheckCircle2,
      title: "Soluciona",
      description: "El municipio gestiona, prioriza y actualiza el estado del problema en tiempo real."
    }
  ];
</script>

<section id="como-funciona" class="bg-muted/30 h-screen flex justify-center items-center">
  <div class="container px-4 md:px-6 mx-auto py-8">
    <div class="text-center max-w-3xl mx-auto mb-8 md:mb-16">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">¿Cómo funciona?</h2>
      <p class="text-muted-foreground text-base md:text-lg">
        Tres simples pasos para empezar a mejorar tu comunidad hoy mismo.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 relative">
      <!-- Connecting line for desktop -->
      <div class="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-border to-transparent z-0"></div>

      {#each steps as step, i}
        <div class="relative z-10 flex flex-col items-center text-center group">
          <div class="mb-6 h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-background border shadow-sm flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-md transition-all duration-300">
            <step.icon class="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </div>
          <div class="space-y-2">
            <div class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm mb-2">
              {i + 1}
            </div>
            <h3 class="text-lg md:text-xl font-bold">{step.title}</h3>
            <p class="text-muted-foreground leading-relaxed max-w-[300px] mx-auto">
              {step.description}
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
