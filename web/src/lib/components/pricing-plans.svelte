<script>
  import { Button } from "$lib/components/ui/button";
  import { Check, ChevronDown, Wrench, Smartphone, MapPin, Users, BarChart3, Shield, FileText, Calendar, Building2 } from 'lucide-svelte';
  import { Badge } from "$lib/components/ui/badge";
  import { slide } from 'svelte/transition';
  
  // Estado para controlar accordion de especificaciones técnicas
  let showTechSpecsMedium = $state(false);
  let showTechSpecsGrande = $state(false);
  
  // Estado para controlar accordion de disponibilidad
  let showAvailabilityMedium = $state(false);
  let showAvailabilityGrande = $state(false);
</script>

<section id="planes" class="py-16 md:py-24 bg-background">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="text-center mb-12 md:mb-16">
      <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-4">
        Planes y Servicios
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
        Soluciones para cada municipio
      </h2>
      <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Escala desde una prueba piloto hasta la gestión integral de tu ciudad.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      <!-- Plan 1: Piloto -->
      <div class="relative p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col">
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
      <div class="relative p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col">
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
      <div class="relative p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col">
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

        <!-- ESPECIFICACIONES TÉCNICAS ACCORDION -->
        <div class="mb-4 border rounded-lg overflow-hidden">
          <button 
            onclick={() => showTechSpecsMedium = !showTechSpecsMedium}
            class="w-full flex items-center justify-between p-3 text-sm font-semibold hover:bg-accent/50 transition-colors"
            aria-expanded={showTechSpecsMedium}
          >
            <span>Ver especificaciones técnicas completas</span>
            <ChevronDown class="h-4 w-4 transition-transform {showTechSpecsMedium ? 'rotate-180' : ''}" />
          </button>
          
          {#if showTechSpecsMedium}
            <div class="p-4 border-t bg-muted/30 space-y-4" transition:slide>
              <!-- Especificación 1: API REST -->
              <div class="flex gap-3">
                <Wrench class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">API REST con documentación OpenAPI</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Se integra con tus sistemas municipales existentes (ERP, SIRCO) en 48 horas sin detener operaciones ni reemplazar software actual, ahorrando $2-5M en costos de migración
                  </p>
                </div>
              </div>

              <!-- Especificación 2: App móvil -->
              <div class="flex gap-3">
                <Smartphone class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">App móvil híbrida Android/iOS</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Compatible con Android 8.0+ e iOS 13+, funciona en el 97% de teléfonos en Chile sin obligar a vecinos a comprar equipos nuevos
                  </p>
                </div>
              </div>

              <!-- Especificación 3: Geolocalización -->
              <div class="flex gap-3">
                <MapPin class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">Geolocalización GPS con precisión de 5 metros</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Elimina 100% de ambigüedad sobre ubicación exacta del problema, acelerando tiempo de respuesta de cuadrillas en un 40% promedio
                  </p>
                </div>
              </div>

              <!-- Especificación 4: Multi-usuario -->
              <div class="flex gap-3">
                <Users class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">Multi-usuario ilimitado con roles diferenciados</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Director, supervisores, analistas y cuadrillas acceden con permisos específicos, $0 costo adicional por usuario (vs. $15.000/usuario/mes de competencia)
                  </p>
                </div>
              </div>

              <!-- Especificación 5: Dashboard -->
              <div class="flex gap-3">
                <BarChart3 class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">Dashboard con 15+ indicadores en tiempo real</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Justifica presupuestos ante concejo municipal con mapas de calor de zonas críticas y datos concretos de demanda ciudadana real
                  </p>
                </div>
              </div>

              <!-- Especificación 6: SSO -->
              <div class="flex gap-3">
                <Shield class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">SSO empresarial (SAML 2.0, OAuth 2.0)</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Equipo usa credenciales corporativas que ya conoce, sin gestionar contraseñas extra, cumpliendo políticas de seguridad institucional
                  </p>
                </div>
              </div>

              <!-- Especificación 7: Reportes -->
              <div class="flex gap-3">
                <FileText class="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p class="text-sm font-bold">Reportes mensuales automatizados en PDF</p>
                  <p class="text-sm text-muted-foreground leading-relaxed mt-1">
                    → Enviado primer día del mes con KPIs listos para presentar a alcalde/concejo, ahorrando 8+ horas de análisis manual
                  </p>
                </div>
              </div>
            </div>
          {/if}
        </div>

        <!-- DISPONIBILIDAD E IMPLEMENTACIÓN ACCORDION -->
        <div class="mb-4 border rounded-lg overflow-hidden">
          <button 
            onclick={() => showAvailabilityMedium = !showAvailabilityMedium}
            class="w-full flex items-center justify-between p-3 text-sm font-semibold hover:bg-accent/50 transition-colors"
            aria-expanded={showAvailabilityMedium}
          >
            <span>Disponibilidad e Implementación</span>
            <ChevronDown class="h-4 w-4 transition-transform {showAvailabilityMedium ? 'rotate-180' : ''}" />
          </button>
          
          {#if showAvailabilityMedium}
            <div class="p-4 border-t bg-muted/30 space-y-3" transition:slide>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Implementación:</strong> 2-3 semanas</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Capacitación incluida:</strong> 2 sesiones virtuales</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Soporte:</strong> Lun-Vie 9:00-18:00 prioritario</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Actualizaciones:</strong> Mensuales sin costo extra</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Migración de datos:</strong> Incluida desde Excel/CSV</span>
              </div>
              
              <div class="pt-3 border-t space-y-2">
                <div class="flex items-center gap-2 text-sm">
                  <Calendar class="h-4 w-4 text-primary" />
                  <span><strong>Próxima disponibilidad:</strong> Diciembre 2024</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <Building2 class="h-4 w-4 text-primary" />
                  <span><strong>Cupos limitados:</strong> 5 municipios/mes</span>
                </div>
              </div>
            </div>
          {/if}
        </div>

        <Button class="w-full bg-primary hover:bg-primary/90">
          Ver Detalles
        </Button>
      </div>

      <!-- Plan 4: Municipio Grande -->
      <div class="relative p-8 rounded-2xl border bg-background hover:shadow-lg transition-shadow h-full flex flex-col">
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

        <!-- DISPONIBILIDAD E IMPLEMENTACIÓN ACCORDION -->
        <div class="mb-4 border rounded-lg overflow-hidden">
          <button 
            onclick={() => showAvailabilityGrande = !showAvailabilityGrande}
            class="w-full flex items-center justify-between p-3 text-sm font-semibold hover:bg-accent/50 transition-colors"
            aria-expanded={showAvailabilityGrande}
          >
            <span>Disponibilidad e Implementación</span>
            <ChevronDown class="h-4 w-4 transition-transform {showAvailabilityGrande ? 'rotate-180' : ''}" />
          </button>
          
          {#if showAvailabilityGrande}
            <div class="p-4 border-t bg-muted/30 space-y-3" transition:slide>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Implementación:</strong> 3-4 semanas (personalizada)</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Capacitación:</strong> Presencial in-situ</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Soporte:</strong> 24/7 con SLA garantizado</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Actualizaciones:</strong> Semanales + hotfixes</span>
              </div>
              <div class="flex gap-2 items-start text-sm">
                <Check class="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                <span><strong>Migración:</strong> Desde cualquier sistema (incluye ETL)</span>
              </div>
              
              <div class="pt-3 border-t space-y-2">
                <div class="flex items-center gap-2 text-sm">
                  <Calendar class="h-4 w-4 text-primary" />
                  <span><strong>Disponibilidad:</strong> Inmediata</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <Building2 class="h-4 w-4 text-primary" />
                  <span><strong>Gestor dedicado</strong> asignado</span>
                </div>
              </div>
            </div>
          {/if}
        </div>

        <Button variant="outline" class="w-full border-primary text-primary hover:bg-primary/10">
          Contactar Ventas
        </Button>
      </div>
    </div>
  </div>
</section>
