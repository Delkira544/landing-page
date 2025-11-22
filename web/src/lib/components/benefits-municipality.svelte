<script>
  import { Button } from "$lib/components/ui/button";
  import { BarChart3, ListFilter, MessageSquare, ShieldCheck } from 'lucide-svelte';
</script>

<section id="municipios" class="py-24 bg-slate-950 text-white overflow-hidden relative w-full">
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
    <div class="absolute right-0 top-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/4"></div>
  </div>

  <div class="container px-4 md:px-6 mx-auto relative z-10">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div class="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-semibold text-primary-foreground mb-6">
          Para Municipios
        </div>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Gestión inteligente para una ciudad moderna
        </h2>
        <p class="text-slate-300 text-lg mb-8 leading-relaxed">
          Centraliza los reportes ciudadanos en un dashboard profesional. Prioriza recursos, mejora tiempos de respuesta y toma decisiones basadas en datos reales.
        </p>
        
        <ul class="space-y-6 mb-10">
          <li class="flex items-start gap-4">
            <div class="mt-1 h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0">
              <ListFilter class="h-4 w-4" />
            </div>
            <div>
              <h3 class="font-bold text-lg">Panel centralizado</h3>
              <p class="text-sm text-slate-400">Vista unificada de todos los reportes con filtros por urgencia y categoría.</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <div class="mt-1 h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0">
              <BarChart3 class="h-4 w-4" />
            </div>
            <div>
              <h3 class="font-bold text-lg">Datos e indicadores</h3>
              <p class="text-sm text-slate-400">Métricas en tiempo real para optimizar la gestión de cuadrillas y recursos.</p>
            </div>
          </li>
          <li class="flex items-start gap-4">
            <div class="mt-1 h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary-foreground shrink-0">
              <MessageSquare class="h-4 w-4" />
            </div>
            <div>
              <h3 class="font-bold text-lg">Comunicación directa</h3>
              <p class="text-sm text-slate-400">Notifica automáticamente a los vecinos sobre el estado de sus solicitudes.</p>
            </div>
          </li>
        </ul>

        <Button size="lg" class="bg-primary hover:bg-primary/90 text-white border-0">
          Agenda una demo
        </Button>
      </div>

      <div class="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-2 shadow-2xl">
        <img 
            src="/placeholder.svg?height=600&width=800" 
            alt="Dashboard Municipal"
            class="w-full rounded-lg border border-white/5 shadow-inner"
        />
        <!-- Badge -->
        <div class="absolute -top-4 -right-4 bg-secondary text-white px-4 py-2 rounded-lg font-bold shadow-lg rotate-3 text-sm">
          Gestión +30% más rápida
        </div>
      </div>
    </div>
  </div>
</section>
