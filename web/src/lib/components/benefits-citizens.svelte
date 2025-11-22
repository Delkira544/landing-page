<script>
  import { Smartphone, Bell, Users, MapPin } from 'lucide-svelte';
  import { onMount } from 'svelte'; 
  const benefits = [
    {
      icon: Smartphone,
      title: "Reporta en segundos",
      description: "Interfaz intuitiva diseñada para que reportar un problema tome menos de un minuto."
    },
    {
      icon: Bell,
      title: "Seguimiento en vivo",
      description: "Recibe notificaciones cuando tu reporte sea revisado y solucionado por el municipio."
    },
    {
      icon: Users,
      title: "Impacto comunitario",
      description: "Participa activamente en mejorar tu barrio y ve los aportes de tus vecinos."
    },
    {
      icon: MapPin,
      title: "Mapa interactivo",
      description: "Visualiza todos los reportes de tu zona y apoya las causas que más te importan."
    }
  ];


   const images = [
    '/Imagen_ciudadano.jpg',
    '/Imagen_ciudadano2.jpg',
    '/Imagen_ciudadano3.jpg'
  ];

  let currentImage = $state(0);
  let isTransitioning = $state(false);

  onMount(() => {
    const interval = setInterval(() => {
      isTransitioning = true;
      setTimeout(() => {
        currentImage = (currentImage + 1) % images.length;
        isTransitioning = false;
      }, 700); // Duración de la transición
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  });

</script>

<section id="ciudadanos" class="py-24">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div class="order-2 lg:order-1 relative">
        <div class="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-muted">
          <img 
            src="{images[currentImage]}?height=800&width=800" 
            alt="Ciudadanos usando la app"
            class="w-full h-full object-cover transition-all duration-500 ease-in-out {isTransitioning ? 'blur-sm opacity-75' : 'blur-0 opacity-100'}"
          />
          <!-- Floating Stat Card -->
          <div class="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]">
            <div class="text-4xl font-bold text-primary mb-2">+500</div>
            <p class="text-sm font-medium text-muted-foreground">Problemas resueltos en el último mes gracias a vecinos como tú.</p>
          </div>
        </div>
      </div>
      
      <div class="order-1 lg:order-2">
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent text-accent-foreground mb-6">
          Para Ciudadanos
        </div>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Tu voz cuenta para construir una mejor ciudad
        </h2>
        <p class="text-muted-foreground text-lg mb-10 leading-relaxed">
          Olvídate de los trámites burocráticos. Con nuestra app, tienes el poder de reportar y monitorear las mejoras de tu comunidad directamente desde tu bolsillo.
        </p>
        
        <div class="grid sm:grid-cols-2 gap-8">
          {#each benefits as benefit}
            <div class="flex flex-col gap-3">
              <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <benefit.icon class="h-5 w-5" />
              </div>
              <h3 class="font-bold text-lg">{benefit.title}</h3>
              <p class="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
