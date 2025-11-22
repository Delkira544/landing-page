<script>
  import { Check, X } from 'lucide-svelte';
</script>

<section class="py-24 bg-primary/5">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          ¿Por qué centralizar los reportes?
        </h2>
        <p class="text-lg text-muted-foreground leading-relaxed">
          El problema actual es que los reportes ciudadanos quedan perdidos en redes sociales, correos sin responder y llamadas telefónicas, haciendo imposible su seguimiento.
        </p>
        <p class="text-lg font-medium text-foreground">
          ReportaCiudad conecta vecinos y municipio en una sola plataforma eficiente.
        </p>
      </div>
      
      <div class="grid sm:grid-cols-2 gap-6">
        <!-- Problem Card -->
        <div class="bg-background p-6 rounded-2xl shadow-sm border border-destructive/20">
          <div class="flex items-center gap-2 mb-4 text-destructive">
            <X class="h-5 w-5" />
            <h3 class="font-bold">Sin centralización</h3>
          </div>
          <ul class="space-y-3">
            <li class="text-sm text-muted-foreground flex gap-2">
              <span class="text-destructive">•</span> Reportes dispersos en RRSS
            </li>
            <li class="text-sm text-muted-foreground flex gap-2">
              <span class="text-destructive">•</span> Difícil seguimiento
            </li>
            <li class="text-sm text-muted-foreground flex gap-2">
              <span class="text-destructive">•</span> Información duplicada
            </li>
            <li class="text-sm text-muted-foreground flex gap-2">
              <span class="text-destructive">•</span> Respuestas lentas
            </li>
          </ul>
        </div>

        <!-- Solution Card -->
        <div class="bg-background p-6 rounded-2xl shadow-lg border-2 border-primary relative overflow-hidden">
           <div class="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-wider">
             Solución
           </div>
          <div class="flex items-center gap-2 mb-4 text-primary">
            <Check class="h-5 w-5" />
            <h3 class="font-bold">Con ReportaCiudad</h3>
          </div>
          <ul class="space-y-3">
            <li class="text-sm text-foreground flex gap-2">
              <span class="text-primary font-bold">✓</span> Plataforma única
            </li>
            <li class="text-sm text-foreground flex gap-2">
              <span class="text-primary font-bold">✓</span> Trazabilidad total
            </li>
            <li class="text-sm text-foreground flex gap-2">
              <span class="text-primary font-bold">✓</span> Geo-referenciación
            </li>
            <li class="text-sm text-foreground flex gap-2">
              <span class="text-primary font-bold">✓</span> Gestión eficiente
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
