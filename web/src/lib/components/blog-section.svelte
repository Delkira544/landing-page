<script>
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, Calendar, User } from 'lucide-svelte';
  import { goto } from '$app/navigation';
</script>

<section id="blog" class="py-2 md:py-2 bg-muted/30"> <!-- Cambiado: reducido py-24 a py-16 en móvil -->
  <div class="container px-4 md:px-6 mx-auto">
    <div class="text-center mb-6 md:mb-10"> <!-- Cambiado: reducido mb-16 a mb-12 en móvil -->
      <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-4">
        Blog y Recursos
      </div>
      <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-2 md:mb-4 text-balance"> <!-- Cambiado: reducido text-3xl a text-2xl en móvil -->
        Aprende sobre participación ciudadana
      </h2>
      <p class="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"> <!-- Cambiado: reducido text-lg a text-base en móvil -->
        Artículos sobre cómo mejorar tu barrio y gestionar de forma inteligente.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-6 md:gap-8"> <!-- Cambiado: gap-8 a gap-6 en móvil -->
      <!-- Article 1 -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-48 md:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative"> <!-- Cambiado: h-64 a h-48 en móvil -->
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/junta.avif" alt="Junta de Vecinos" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-6 md:p-8"> <!-- Cambiado: p-8 a p-6 en móvil -->
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
          <h3 class="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors"> <!-- Cambiado: text-2xl a text-xl en móvil -->
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
        <div class="h-48 md:h-64 bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden relative"> <!-- Cambiado: h-64 a h-48 en móvil -->
          <div class="absolute inset-0 flex items-center justify-center">
              <img src="/blog/gestion.png" alt="Junta de Vecinos" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-6 md:p-8"> <!-- Cambiado: p-8 a p-6 en móvil -->
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
          <h3 class="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors"> <!-- Cambiado: text-2xl a text-xl en móvil -->
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

    <div class="text-center mt-4 md:mt-8"> <!-- Cambiado: mt-12 a mt-8 en móvil -->
      <a href="/blogs" class="inline-flex items-center px-8 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
        Ver todos los artículos
        <ArrowRight class="ml-2 h-4 w-4" />
      </a>
    </div>
  </div>
</section>
