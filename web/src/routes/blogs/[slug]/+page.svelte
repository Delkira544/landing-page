<script>
  import { page } from '$app/stores';
  import { ArrowLeft, Calendar, User } from 'lucide-svelte';

  $: slug = $page.params.slug;

  // Datos de blogs (puedes mover a un archivo separado si crece)
  const blogs = {
    'junta-vecinos': {
      title: 'Cómo organizar tu junta de vecinos en 5 pasos',
      date: '15 Nov 2024',
      author: 'Equipo TemuTrack',
      image: '/blog/junta.avif',
      content: `
        <p>La participación colectiva es más fuerte. En este artículo, te enseñamos cómo articularte con tus vecinos para lograr cambios reales en tu barrio.</p>
        <h2>Paso 1: Identifica problemas comunes</h2>
        <p>Reúne a tus vecinos y discute los temas que afectan a todos, como seguridad, limpieza o infraestructura.</p>
        <h2>Paso 2: Forma un comité</h2>
        <p>Elije representantes para coordinar acciones y comunicar con las autoridades.</p>
        <h2>Paso 3: Planifica reuniones regulares</h2>
        <p>Establece agendas claras y horarios convenientes para mantener el compromiso.</p>
        <h2>Paso 4: Colabora con el municipio</h2>
        <p>Presenta propuestas concretas y sigue el progreso de las soluciones.</p>
        <h2>Paso 5: Evalúa y mejora</h2>
        <p>Revisa lo logrado y ajusta estrategias para futuras iniciativas.</p>
      `
    },
    'gestion-reclamos': {
      title: 'Gestión de reclamos ciudadanos: Mejores prácticas municipales',
      date: '8 Nov 2024',
      author: 'Municipios Conectados',
      image: '/blog/gestion.png',
      content: `
        <p>Descubre cómo ciudades líderes están transformando sus procesos de gestión de reportes.</p>
        <h2>Clasificación automática</h2>
        <p>Usa IA para categorizar reclamos y asignarlos al departamento adecuado.</p>
        <h2>Seguimiento en tiempo real</h2>
        <p>Proporciona actualizaciones a los ciudadanos sobre el estado de sus reportes.</p>
        <h2>Cierre con evidencia</h2>
        <p>Requiere fotos o videos de las soluciones implementadas para mayor transparencia.</p>
        <h2>Optimización de tiempos</h2>
        <p>Reduce el tiempo de respuesta mediante flujos de trabajo eficientes.</p>
        <h2>Mejora de satisfacción</h2>
        <p>Aumenta la confianza ciudadana con procesos claros y efectivos.</p>
      `
    }
  };

  $: blog = blogs[slug];
</script>

{#if blog}
  <article class="py-16 md:py-24">
    <div class="container px-4 md:px-6 mx-auto max-w-4xl">
      <a href="/blogs" class="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft class="mr-2 h-4 w-4" />
        Volver al blog
      </a>

      <div class="mb-8">
        <img src={blog.image} alt={blog.title} class="w-full h-64 md:h-96 object-cover rounded-2xl mb-6" />
        <div class="flex gap-4 mb-4 text-sm text-muted-foreground">
          <div class="flex items-center gap-1.5">
            <Calendar class="h-4 w-4" />
            <span>{blog.date}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <User class="h-4 w-4" />
            <span>{blog.author}</span>
          </div>
        </div>
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
          {blog.title}
        </h1>
      </div>

      <div class="prose prose-lg max-w-none">
        {@html blog.content}
      </div>
    </div>
  </article>
{:else}
  <div class="py-16 md:py-24">
    <div class="container px-4 md:px-6 mx-auto text-center">
      <h1 class="text-3xl font-bold mb-4">Blog no encontrado</h1>
      <p class="text-muted-foreground mb-8">El artículo que buscas no existe.</p>
      <a href="/blogs" class="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
        Ver todos los artículos
      </a>
    </div>
  </div>
{/if}