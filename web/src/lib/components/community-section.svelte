<script>
  import { Button } from "$lib/components/ui/button";
  import { Instagram, Tv } from 'lucide-svelte';
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

    <div class="grid md:grid-cols-2 gap-8 mb-12">
      <!-- Instagram -->
      <div class="rounded-2xl border bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
        <div class="flex items-center gap-4 mb-6">
          <div class="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white">
            <Instagram class="h-6 w-6" />
          </div>
          <div>
            <h3 class="text-xl font-bold">@temutrack_oficial</h3>
            <p class="text-sm text-muted-foreground">+2,100 seguidores</p>
          </div>
        </div>
        
        <p class="text-muted-foreground mb-6 leading-relaxed">
          <strong>Contenido:</strong> Videos de producto (cómo reportar), testimonios de ciudadanos y funcionarios, tips de participación cívica, y tendencias en ciudades inteligentes adaptadas a La Araucanía.
        </p>

        <div class="space-y-2 mb-6">
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">📱</span> Video PRODUCTO: "Reporta en 30 segundos"
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">🎥</span> Video EMPRESA: "Quiénes somos y por qué lo hacemos"
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">💡</span> Video EDUCACIÓN: "3 tips para hacer reportes efectivos"
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">🚀</span> Video LIBRE: Contenido viral adaptado a comunidad urbana
          </p>
        </div>

        <Button class="w-full bg-secondary hover:bg-secondary/90 text-white">
          <Instagram class="mr-2 h-4 w-4" />
          Seguir en Instagram
        </Button>
      </div>

      <!-- TikTok -->
      <div class="rounded-2xl border bg-gradient-to-br from-secondary/5 to-primary/5 p-8 md:p-12">
        <div class="flex items-center gap-4 mb-6">
          <div class="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
            <Tv class="h-6 w-6" />
          </div>
          <div>
            <h3 class="text-xl font-bold">@temutrack</h3>
            <p class="text-sm text-muted-foreground">+1,500 seguidores</p>
          </div>
        </div>
        
        <p class="text-muted-foreground mb-6 leading-relaxed">
          <strong>Contenido:</strong> Shorts y videos cortos sobre cambios en el barrio, "antes y después" de problemas resueltos, desafíos comunitarios, y momentos de interacción con vecinos.
        </p>

        <div class="space-y-2 mb-6">
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">✨</span> Transformaciones de barrios
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">🎬</span> Testimonios en primera persona
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">🌟</span> Challenges cívicos virales
          </p>
          <p class="text-sm text-muted-foreground flex gap-2">
            <span class="text-primary font-bold">🔄</span> Trending sounds adaptados al tema
          </p>
        </div>

        <Button class="w-full bg-primary hover:bg-primary/90">
          <Tv class="mr-2 h-4 w-4" />
          Seguir en TikTok
        </Button>
      </div>
    </div>
  </div>
</section>
