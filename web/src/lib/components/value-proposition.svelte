<script>
  import { Target, BarChart3, Zap, Eye } from 'lucide-svelte';
</script>

<section class="bg-accent/50 py-12 md:py-16 border-b">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <!-- Attribute 1 -->
      <div class="flex flex-col gap-3 items-start p-6 rounded-xl bg-background/80 border">
        <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Target class="h-5 w-5" />
        </div>
        <h3 class="font-bold">Reportes geo-referenciados</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          En segundos, con ubicación exacta y foto integrada.
        </p>
      </div>

      <!-- Attribute 2 -->
      <div class="flex flex-col gap-3 items-start p-6 rounded-xl bg-background/80 border">
        <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Eye class="h-5 w-5" />
        </div>
        <h3 class="font-bold">Seguimiento transparente</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          En tiempo real desde reporte hasta solución.
        </p>
      </div>

      <!-- Attribute 3 -->
      <div class="flex flex-col gap-3 items-start p-6 rounded-xl bg-background/80 border">
        <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <BarChart3 class="h-5 w-5" />
        </div>
        <h3 class="font-bold">Dashboard municipal</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Para cuadrillas, priorización y decisiones basadas en datos.
        </p>
      </div>

      <!-- Attribute 4 -->
      <div class="flex flex-col gap-3 items-start p-6 rounded-xl bg-background/80 border">
        <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Zap class="h-5 w-5" />
        </div>
        <h3 class="font-bold">Historial resolutivo</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Problemas resueltos en tu barrio, mes a mes.
        </p>
      </div>
    </div>
  </div>
</section>
