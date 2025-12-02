<script>
  import { MapPin, Phone, Globe, Mail, Clock, Navigation, Bookmark, Share2, Star } from 'lucide-svelte';
</script>

<!-- Mockup de Google Business Profile -->
<div class="rounded-xl border bg-background shadow-xl overflow-hidden w-full max-w-md mx-auto">
  <!-- Header con logo y nombre -->
  <div class="p-6 bg-slate-800 border-b border-slate-700">
    <div class="flex items-start gap-4 mb-4">
      <div class="h-20 w-20 rounded-lg bg-primary flex items-center justify-center shrink-0">
        <img src="/icono.svg" alt="TemuTrack Logo" class="h-14 w-14" />
      </div>
      <div class="flex-1">
        <h3 class="text-xl font-bold mb-1 text-white">TemuTrack</h3>
        <div class="flex items-center gap-1 mb-1">
          {#each [1, 2, 3, 4, 5] as star}
            <Star class="h-4 w-4 fill-yellow-400 text-yellow-400" />
          {/each}
          <span class="text-sm text-gray-200 ml-1">4.9</span>
        </div>
        <p class="text-xs text-gray-200">(127 reseñas)</p>
        <p class="text-sm text-gray-100 mt-1">Desarrollador de software</p>
      </div>
    </div>

    <!-- Botones de acción -->
    <div class="flex gap-2">
      <button class="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors">
        <Navigation class="h-4 w-4" />
        Indicaciones
      </button>
      <button class="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors">
        <Bookmark class="h-4 w-4" />
      </button>
      <button class="px-4 py-2 text-sm font-medium text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors">
        <Share2 class="h-4 w-4" />
      </button>
    </div>
  </div>

  <!-- Información de contacto -->
  <div class="p-6 space-y-4">
    <div class="flex items-start gap-3">
      <MapPin class="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" />
      <div>
        <p class="text-sm font-semibold">Dirección</p>
        <p class="text-sm text-foreground/80">Temuco, Región de La Araucanía</p>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <Phone class="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" />
      <div>
        <p class="text-sm font-semibold">Teléfono</p>
        <a href="tel:+56912345678" class="text-sm text-primary hover:underline">+56 9 1234 5678</a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <Globe class="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" />
      <div>
        <p class="text-sm font-semibold">Sitio web</p>
        <a href="https://temutrack.vercel.app" target="_blank" rel="noopener" class="text-sm text-primary hover:underline">temutrack.vercel.app</a>
      </div>
    </div>

    <div class="flex items-start gap-3">
      <Mail class="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" />
      <div>
        <p class="text-sm font-semibold">Correo electrónico</p>
        <a href="mailto:hola@temutrack.cl" class="text-sm text-primary hover:underline">hola@temutrack.cl</a>
      </div>
    </div>

    <!-- Horario -->
    <div class="flex items-start gap-3 pt-4 border-t">
      <Clock class="h-5 w-5 text-foreground/60 shrink-0 mt-0.5" />
      <div class="flex-1">
        <p class="text-sm font-bold mb-2">HORARIO</p>
        <div class="space-y-1 text-sm">
          <div class="flex justify-between">
            <span class="text-foreground/70">Lun-Vie:</span>
            <span class="font-semibold">9:00-18:00</span>
          </div>
          <div class="flex justify-between">
            <span class="text-foreground/70">Sáb-Dom:</span>
            <span class="font-semibold">Cerrado</span>
          </div>
        </div>
        <p class="text-xs text-primary font-medium mt-2">Soporte online 24/7</p>
      </div>
    </div>

    <!-- Miniaturas de fotos -->
    <div class="pt-4 border-t">
      <p class="text-sm font-bold mb-3">FOTOS</p>
      <div class="grid grid-cols-6 gap-2">
        <div class="aspect-square rounded bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
          📱
        </div>
        <div class="aspect-square rounded bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-2xl">
          💻
        </div>
        <div class="aspect-square rounded bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
          👥
        </div>
        <div class="aspect-square rounded bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-2xl">
          🏢
        </div>
        <div class="aspect-square rounded bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-2xl">
          📊
        </div>
        <div class="aspect-square rounded bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center text-2xl">
          🗺️
        </div>
      </div>
    </div>

    <!-- Reseñas recientes -->
    <div class="pt-4 border-t">
      <p class="text-sm font-bold mb-4">RESEÑAS RECIENTES</p>
      
      <!-- Reseña 1 -->
      <div class="mb-4 pb-4 border-b">
        <div class="flex items-center gap-2 mb-2">
          <div class="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold">
            MG
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold">María González</p>
            <p class="text-xs text-foreground/60">Hace 2 días</p>
          </div>
          <div class="flex gap-0.5">
            {#each [1, 2, 3, 4, 5] as star}
              <Star class="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {/each}
          </div>
        </div>
        <p class="text-sm text-foreground/90">
          Excelente plataforma, reporté un bache y en 5 días estaba arreglado!
        </p>
      </div>

      <!-- Reseña 2 -->
      <div class="mb-2">
        <div class="flex items-center gap-2 mb-2">
          <div class="h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center text-xs font-bold">
            RM
          </div>
          <div class="flex-1">
            <p class="text-sm font-semibold">Roberto Muñoz</p>
            <p class="text-xs text-foreground/60">Hace 1 semana</p>
          </div>
          <div class="flex gap-0.5">
            {#each [1, 2, 3, 4, 5] as star}
              <Star class="h-3 w-3 fill-yellow-400 text-yellow-400" />
            {/each}
          </div>
        </div>
        <p class="text-sm text-foreground/90">
          Como presidente de JJ.VV nos cambió la forma de trabajar con la muni
        </p>
      </div>
    </div>
  </div>
</div>
