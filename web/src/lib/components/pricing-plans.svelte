<script>
  import { Button } from "$lib/components/ui/button";
  import { Check } from 'lucide-svelte';
  import { Badge } from "$lib/components/ui/badge";
</script>

<section id="planes" class="py-2 md:py-2 bg-background"> <!-- Cambiado: reducido py-24 a py-16 en móvil para ahorrar espacio -->
  <div class="container px-4 md:px-6 mx-auto">
    <div class="text-center mb-2 md:mb-6"> <!-- Cambiado: reducido mb-16 a mb-12 en móvil -->
      <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-4">
        Planes y Servicios
      </div>
      <h2 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-2 md:mb-4 text-balance"> <!-- Cambiado: reducido text-3xl a text-2xl en móvil -->
        Soluciones para cada municipio
      </h2>
      <p class="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"> <!-- Cambiado: reducido text-lg a text-base en móvil -->
        Escala desde una prueba piloto hasta la gestión integral de tu ciudad.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12"> <!-- Cambiado: gap-6 a gap-4 en móvil, mt-12 a mt-8 en móvil -->
      <!-- Plan 1: Piloto -->
      <div class="relative p-6 md:p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col"> <!-- Cambiado: p-8 a p-6 en móvil -->
        <div class="inline-flex items-center w-fit rounded-lg border px-2.5 py-1 text-xs font-semibold bg-secondary/10 text-secondary mb-4">
          Prueba Piloto
        </div>
        <h3 class="text-xl font-bold mb-2">Piloto Ciudadano</h3>
        <p class="text-sm text-muted-foreground mb-6">Para validar en una o dos comunas</p>
        
        <div class="mb-8">
          <span class="text-4xl font-bold">Gratis</span>
          <p class="text-sm text-muted-foreground mt-2">Primeros 30 días</p>
        </div>

        <div class="mb-8 p-4 rounded-lg bg-muted/30 border">
          <p class="text-sm italic text-muted-foreground">
            "Temutrack nos permitió probar el concepto sin riesgo"
          </p>
          <p class="text-xs text-muted-foreground mt-2">— Municipalidad de ejemplo</p>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Hasta 500 reportes</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>1 comuna habilitada</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Dashboard básico</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Soporte por email</span>
          </li>
        </ul>

        <Button class="w-full bg-primary hover:bg-primary/90">
          Solicitar Piloto
        </Button>
      </div>

      <!-- Plan 2: Municipio Pequeño -->
      <div class="relative p-6 md:p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col"> <!-- Cambiado: p-8 a p-6 en móvil -->
        <Badge class="w-fit mb-4">Popular</Badge>
        <h3 class="text-xl font-bold mb-2">Municipio Pequeño</h3>
        <p class="text-sm text-muted-foreground mb-6">Ciudades hasta 50.000 habitantes</p>
        
        <div class="mb-8">
          <span class="text-4xl font-bold">$99.900</span>
          <p class="text-sm text-muted-foreground mt-2">por mes, suscripción anual</p>
        </div>

        <div class="mb-8 p-4 rounded-lg bg-muted/30 border">
          <p class="text-sm italic text-muted-foreground">
            "Transformó la gestión de reportes en nuestra comuna"
          </p>
          <p class="text-xs text-muted-foreground mt-2">— Directora de Obras, La Araucanía</p>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Reportes ilimitados</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Todas las comunas</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Dashboard avanzado</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Soporte prioritario</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Reportes mensuales</span>
          </li>
        </ul>

        <Button class="w-full bg-secondary hover:bg-secondary/90 text-white">
          Empezar Ahora
        </Button>
      </div>

      <!-- Plan 3: Municipio Mediano -->
      <div class="relative p-6 md:p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col"> <!-- Cambiado: p-8 a p-6 en móvil -->
        <div class="inline-flex items-center w-fit rounded-lg border px-2.5 py-1 text-xs font-semibold bg-primary/10 text-primary mb-4">
          Recomendado
        </div>
        <h3 class="text-xl font-bold mb-2">Municipio Mediano</h3>
        <p class="text-sm text-muted-foreground mb-6">Ciudades hasta 200.000 habitantes</p>
        
        <div class="mb-8">
          <span class="text-4xl font-bold">$349.900</span>
          <p class="text-sm text-muted-foreground mt-2">por mes, suscripción anual</p>
        </div>

        <div class="mb-8 p-4 rounded-lg bg-muted/30 border">
          <p class="text-sm italic text-muted-foreground">
            "Mejoramos velocidad de respuesta en 40%"
          </p>
          <p class="text-xs text-muted-foreground mt-2">— Jefe de Proyectos Municipales</p>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Todo Plan Pequeño</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Integraciones API</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>SSO y Multi-usuario</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Análisis avanzados</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Capacitación incluida</span>
          </li>
        </ul>

        <Button class="w-full bg-primary hover:bg-primary/90">
          Ver Detalles
        </Button>
      </div>

      <!-- Plan 4: Municipio Grande -->
      <div class="relative p-6 md:p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col"> <!-- Cambiado: p-8 a p-6 en móvil -->
        <div class="inline-flex items-center w-fit rounded-lg border px-2.5 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-4">
          Enterprise
        </div>
        <h3 class="text-xl font-bold mb-2">Municipio Grande</h3>
        <p class="text-sm text-muted-foreground mb-6">Más de 200.000 habitantes</p>
        
        <div class="mb-8">
          <span class="text-4xl font-bold">Personalizado</span>
          <p class="text-sm text-muted-foreground mt-2">Contacta para propuesta</p>
        </div>

        <div class="mb-8 p-4 rounded-lg bg-muted/30 border">
          <p class="text-sm italic text-muted-foreground">
            "Solución completa adaptada a nuestras necesidades"
          </p>
          <p class="text-xs text-muted-foreground mt-2">— Municipalidad de referencia</p>
        </div>

        <ul class="space-y-3 mb-8 flex-1">
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Planes anteriores +</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Desarrollo personalizado</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Soporte 24/7</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>SLA garantizado</span>
          </li>
          <li class="flex gap-3 text-sm">
            <Check class="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>Gestor dedicado</span>
          </li>
        </ul>

        <Button variant="outline" class="w-full border-primary text-primary hover:bg-primary/10">
          Contactar Ventas
        </Button>
      </div>
    </div>
  </div>
</section>
