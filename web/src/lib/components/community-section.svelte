<script>
  import { Button } from "$lib/components/ui/button";
  import { Instagram } from 'lucide-svelte';
</script>

<section id="comunidad" class="py-24 md:py-32 bg-background">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
        Síguenos en redes sociales
      </h2>
      <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
        Compartimos historias reales, tips cívicos y tendencias sobre participación urbana.
      </p>
    </div>

    <div class="flex justify-center mb-12">
      <!-- Instagram -->
      <div class="rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12 max-w-2xl w-full">
        <div class="flex items-center gap-4 mb-6">
          <div class="h-12 w-12 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
            <img src="/icono.svg" alt="Logo TemuTrack" class="h-8 w-8" />
          </div>
          <div>
            <h3 class="text-xl font-bold">@temutrack_oficial</h3>
          </div>
        </div>
        
        <p class="text-muted-foreground mb-6 leading-relaxed">
          <strong>Contenido:</strong> Videos de producto (cómo reportar), testimonios de ciudadanos y funcionarios, tips de participación cívica, y tendencias en ciudades inteligentes adaptadas a La Araucanía.
        </p>

        <Button class="w-full bg-secondary hover:bg-secondary/90 text-white">
          <Instagram class="mr-2 h-4 w-4" />
          Seguir en Instagram
        </Button>
      </div>
    </div>
  </div>
</section>
