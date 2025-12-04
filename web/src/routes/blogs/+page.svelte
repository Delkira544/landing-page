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

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Article 1: Guía práctica de reportes -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/junta.avif" alt="Guía de Reportes Temuco" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-8">
          <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              <span>3 Dic 2025</span>
            </div>
            <div class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              <span>Equipo TemuTrack</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            Cómo hacer un reporte efectivo en Temuco: Guía paso a paso 2025
          </h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">
            Guía completa sobre canales oficiales, qué información incluir, cómo documentar problemas y qué esperar del seguimiento municipal en Temuco.
          </p>
          <a href="/blogs/guia-reportes-temuco" on:click|preventDefault={() => goto('/blogs/guia-reportes-temuco', { replaceState: true })} class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Leer más
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Article 2: Casos exitosos -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-64 bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/gestion.png" alt="Casos Exitosos Temuco" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-8">
          <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              <span>2 Dic 2025</span>
            </div>
            <div class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              <span>Vecinos de Temuco</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            5 casos reales donde los reportes ciudadanos lograron cambios en Temuco
          </h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">
            Historias verificables de vecinos que solucionaron problemas urbanos, qué hicieron bien y cuánto tiempo tomó cada solución.
          </p>
          <a href="/blogs/casos-exitosos-temuco" on:click|preventDefault={() => goto('/blogs/casos-exitosos-temuco', { replaceState: true })} class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Leer más
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>

      <!-- Article 3: Transformar el espacio público -->
      <div class="group overflow-hidden rounded-2xl border bg-background hover:shadow-lg transition-all">
        <div class="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden relative">
          <div class="absolute inset-0 flex items-center justify-center">
            <img src="/blog/Equipo.png" alt="Participación Ciudadana" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
        <div class="p-8">
          <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
            <div class="flex items-center gap-1.5">
              <Calendar class="h-4 w-4" />
              <span>1 Dic 2025</span>
            </div>
            <div class="flex items-center gap-1.5">
              <User class="h-4 w-4" />
              <span>Participación Ciudadana</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
            Cómo los reportes ciudadanos pueden transformar el espacio público de tu barrio
          </h3>
          <p class="text-muted-foreground mb-6 leading-relaxed">
            Por qué los reportes bien formulados influyen en la priorización municipal y cómo empoderar al vecino como actor clave en la mejora urbana.
          </p>
          <a href="/blogs/transformar-espacio-publico" on:click|preventDefault={() => goto('/blogs/transformar-espacio-publico', { replaceState: true })} class="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            Leer más
            <ArrowRight class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>