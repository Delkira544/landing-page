<script>
  import { ArrowRight, Calendar, User } from 'lucide-svelte';
  import { goto } from '$app/navigation';
</script>

<section class="py-16 md:py-24 bg-muted/30">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="text-center mb-12 md:mb-16">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
        Blog y Recursos
      </h1>
      <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Artículos sobre participación ciudadana y gestión inteligente.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      <!-- Article 1 -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/junta.avif" alt="Junta de Vecinos" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-8">
          <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              <span>15 Nov 2024</span>
            </div>
            <div class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              <span>Equipo TemuTrack</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            Cómo organizar tu junta de vecinos en 5 pasos
          </h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">
            La participación colectiva es más fuerte. Te enseñamos cómo articularte con tus vecinos para lograr cambios reales en tu barrio, desde identificar problemas hasta coordinar soluciones.
          </p>
          <a href="/blogs/junta-vecinos" on:click|preventDefault={() => goto('/blogs/junta-vecinos', { replaceState: true })} class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Leer más
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Article 2 -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/gestion.png" alt="Gestión de Reclamos" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-8">
          <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              <span>8 Nov 2024</span>
            </div>
            <div class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              <span>Municipios Conectados</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            Gestión de reclamos ciudadanos: Mejores prácticas municipales
          </h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">
            Descubre cómo ciudades líderes están transformando sus procesos de gestión de reportes. Desde clasificación automática hasta cierre con foto de solución, optimiza tiempos y satisfacción.
          </p>
          <a href="/blogs/gestion-reclamos" on:click|preventDefault={() => goto('/blogs/gestion-reclamos', { replaceState: true })} class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Leer más
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>