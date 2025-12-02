<script>
  import { Check, Lightbulb, Wrench, Star } from 'lucide-svelte';
</script>

<section id="quienes-somos" class="py-24 md:py-32 bg-muted/20">
  <div class="container px-4 md:px-6 mx-auto max-w-7xl">
    <!-- Badge y título centrado -->
    <div class="text-center mb-12">
      <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary mb-6">
        Nuestro Equipo
      </div>
      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
        Estudiantes universitarios con una misión
      </h2>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Imagen (orden 2 en mobile, 1 en desktop) -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
        <img src="/blog/Equipo.png" alt="Equipo TemuTrack" class="w-full h-full object-cover" />
      </div>

      <!-- Historia (orden 1 en mobile, 2 en desktop) -->
      <div class="order-1 lg:order-2 space-y-6">
        
        <!-- Gancho emocional destacado -->
        <div class="p-4 rounded-lg bg-primary/5 border-l-4 border-primary">
          <p class="font-bold text-lg text-primary">
            "Todo comenzó con un tobillo casi roto y 200 likes sin respuesta"
          </p>
        </div>

        <!-- Párrafo 1 -->
        <p class="text-base leading-relaxed">
          En marzo de 2024, Daniel casi se fractura el tobillo por el mismo hoyo en Pedro de Valdivia que llevaba 8 meses sin reparar.
        </p>

        <!-- Párrafo 2 -->
        <p class="text-base leading-relaxed">
          Ese mismo día, Christian publicó en Instagram una foto del hoyo con el texto: <span class="italic">"¿Cuántos tienen que caerse para que lo arreglen?"</span>
        </p>

        <!-- Párrafo 3 destacado -->
        <div class="p-4 rounded-lg bg-accent border">
          <p class="text-base font-semibold text-primary">
            Obtuvo 200 likes, 43 comentarios de gente con el mismo problema, pero cero respuestas de la municipalidad.
          </p>
        </div>

        <!-- Subtítulo con emoji -->
        <div class="flex items-center gap-2 pt-4">
          <Lightbulb class="h-6 w-6 text-secondary" />
          <h3 class="text-xl font-bold">El momento 'eureka'</h3>
        </div>

        <!-- Párrafo 4 -->
        <p class="text-base leading-relaxed">
          Nos dimos cuenta que Temuco está llena de personas preocupadas tomando fotos de baches, reportando problemas en Facebook, llamando a la muni sin respuesta, viendo cómo nada cambia.
        </p>

        <!-- Párrafo 5 en tarjeta -->
        <div class="p-4 rounded-lg bg-accent/50">
          <p class="text-base font-semibold">
            El problema no era la falta de denuncias. Era que todo se perdía en el ruido.
          </p>
        </div>

        <!-- Lista con viñetas -->
        <ul class="space-y-2 pl-4">
          <li class="text-sm text-muted-foreground">• Los reportes llegaban dispersos</li>
          <li class="text-sm text-muted-foreground">• Algunos por teléfono (sin foto, sin ubicación exacta)</li>
          <li class="text-sm text-muted-foreground">• Otros en redes sociales (visibles pero no procesables)</li>
          <li class="text-sm text-muted-foreground">• Otros en correos (que se pierden en bandejas)</li>
          <li class="text-sm text-muted-foreground">• Nadie compilaba. Nadie priorizaba. Nadie hacía seguimiento.</li>
        </ul>

        <!-- Subtítulo -->
        <div class="flex items-center gap-2 pt-4">
          <Wrench class="h-6 w-6 text-primary" />
          <h3 class="text-xl font-bold">La solución que faltaba</h3>
        </div>

        <!-- Párrafo 6 -->
        <p class="text-base leading-relaxed">
          Como estudiantes de informática de la UCT, sabíamos que había una forma mejor:
        </p>

        <!-- Lista con checkmarks verdes -->
        <ul class="space-y-2">
          <li class="flex gap-2 items-start text-sm">
            <Check class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <span>Un sistema donde cada denuncia quede registrada (no se pierde)</span>
          </li>
          <li class="flex gap-2 items-start text-sm">
            <Check class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <span>Con foto y GPS (ubicación exacta, cero ambigüedad)</span>
          </li>
          <li class="flex gap-2 items-start text-sm">
            <Check class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <span>Visible en un mapa (para identificar zonas críticas)</span>
          </li>
          <li class="flex gap-2 items-start text-sm">
            <Check class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <span>Con seguimiento de estado (de "reportado" a "resuelto")</span>
          </li>
          <li class="flex gap-2 items-start text-sm">
            <Check class="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
            <span>Que genera datos útiles (para que el municipio priorice bien)</span>
          </li>
        </ul>

        <!-- Párrafo 7 -->
        <p class="text-base leading-relaxed">
          No queríamos reemplazar a la municipalidad. Queríamos darle (y darnos) las herramientas que permitan trabajar mejor.
        </p>

        <!-- Subtítulo -->
        <div class="flex items-center gap-2 pt-4">
          <Star class="h-6 w-6 text-secondary" />
          <h3 class="text-xl font-bold">Nuestra creencia</h3>
        </div>

        <!-- Párrafo 8 -->
        <p class="text-base font-semibold">
          La relación vecinos-municipio debe ser de colaboración, no de frustración.
        </p>

        <!-- Párrafo 9 -->
        <p class="text-base leading-relaxed">
          Con buenos datos y transparencia, podemos:
        </p>
        <ul class="space-y-1 pl-4">
          <li class="text-sm">• Que los vecinos se sientan escuchados</li>
          <li class="text-sm">• Que los municipios prioricen con justicia</li>
          <li class="text-sm">• Que los recursos públicos se usen donde más se necesitan</li>
        </ul>

        <!-- Frase final destacada -->
        <div class="p-5 rounded-lg bg-primary/10 border-2 border-primary/20">
          <p class="text-base font-semibold text-balance leading-relaxed">
            TemuTrack es nuestra respuesta a esas 200 personas que dieron like pero no vieron cambios. Es nuestro intento de convertir frustración colectiva en datos útiles para mejorar nuestra ciudad.
          </p>
        </div>

        <!-- Nota al pie -->
        <p class="text-sm text-muted-foreground italic">
          Este proyecto nació en la asignatura Planificación Estratégica Web y RRSS, pero creció hasta convertirse en algo que queremos que exista de verdad.
        </p>

        <!-- Firma -->
        <div class="pt-4 border-t">
          <p class="text-sm font-semibold">
            — Jorge, Daniel, Daniel y Christian
          </p>
          <p class="text-xs text-muted-foreground">
            Estudiantes UCT, vecinos de Temuco, constructores de TemuTrack
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
