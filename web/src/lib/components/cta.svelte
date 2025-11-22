<script>
  import { Button } from "$lib/components/ui/button";
  import { Smartphone, Building2 } from 'lucide-svelte';
</script>

<section class="py-24 bg-background">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="bg-primary rounded-[2.5rem] p-8 md:p-16 text-center md:text-left text-primary-foreground relative overflow-hidden shadow-2xl">
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

      <div class="grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div class="space-y-6">
          <h2 class="text-3xl md:text-4xl md:leading-tight font-bold tracking-tight">
            Mejora tu ciudad hoy mismo
          </h2>
          <p class="text-primary-foreground/80 text-lg md:text-xl max-w-[500px]">
            Únete a miles de vecinos y municipios que ya están transformando sus espacios públicos.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center lg:justify-end">
          <div class="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 flex-1 max-w-xs text-center">
            <Smartphone class="h-8 w-8 mx-auto mb-3 text-secondary" />
            <h3 class="font-bold mb-1">Para Ciudadanos</h3>
            <p class="text-sm text-primary-foreground/70 mb-4">Descarga la app gratis</p>
            <Button class="w-full bg-secondary hover:bg-secondary/90 text-white border-0 font-bold">
              Descargar App
            </Button>
          </div>

          <div class="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/20 flex-1 max-w-xs text-center">
            <Building2 class="h-8 w-8 mx-auto mb-3 text-white" />
            <h3 class="font-bold mb-1">Para Municipios</h3>
            <p class="text-sm text-primary-foreground/70 mb-4">Solicita una demo</p>
            <Button variant="outline" class="w-full bg-transparent border-white text-white hover:bg-white hover:text-primary font-bold">
              Contactar Ventas
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
