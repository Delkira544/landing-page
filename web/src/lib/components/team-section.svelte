<script>
  import { Heart } from 'lucide-svelte';
</script>

<section id="quienes-somos" class="py-24 md:py-32 bg-muted/20">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
        <img src="/blog/Equipo.png" alt="Equipo TemuTrack" class="w-full h-full object-cover" />
      </div>

      <!-- Content -->
      <div class="order-1 lg:order-2">
        <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-6">
          Nuestro Equipo
        </div>

        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
          Estudiantes universitarios con una misión
        </h2>

        <p class="text-lg text-muted-foreground mb-6 leading-relaxed">
          Somos un equipo de estudiantes de la carrera de Planificación Estratégica Web y RRSS que identificamos un problema real en nuestras ciudades: reportes dispersos, sin seguimiento y sin impacto.
        </p>

        <div class="space-y-4 mb-8">
          <div class="flex gap-4">
            <div class="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
              <Heart class="h-3 w-3" />
            </div>
            <div>
              <h3 class="font-bold mb-1">Por qué nos importa</h3>
              <p class="text-muted-foreground text-sm">
                Vivimos en estas ciudades. Queremos que sean espacios donde nuestra voz cuenta y donde los problemas se resuelven juntos.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-white flex-shrink-0 mt-1">
              <Heart class="h-3 w-3" />
            </div>
            <div>
              <h3 class="font-bold mb-1">Cómo nació TemuTrack</h3>
              <p class="text-muted-foreground text-sm">
                Observamos que vecinos reportaban problemas en redes sociales pero nadie los compilaba, validaba ni daba seguimiento. Así surgió la idea de una plataforma centralizada.
              </p>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 mt-1">
              <Heart class="h-3 w-3" />
            </div>
            <div>
              <h3 class="font-bold mb-1">Nuestra creencia</h3>
              <p class="text-muted-foreground text-sm">
                La relación vecinos-municipio debe ser de colaboración, no de frustración. Juntos, con datos y transparencia, construimos ciudades resilientes.
              </p>
            </div>
          </div>
        </div>

        <p class="text-sm text-muted-foreground italic">
          Este proyecto es parte de nuestro trabajo final en la asignatura de Planificación Estratégica Web y RRSS, bajo la supervisión de docentes comprometidos con la innovación cívica.
        </p>
      </div>
    </div>
  </div>
</section>
