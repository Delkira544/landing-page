<script>
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
</script>

<section class="h-full flex justify-center items-center px-4">
  <div class="w-full md:w-[50vw] h-auto md:h-[60vh] bg-muted/30 rounded-lg p-6 flex flex-col justify-center overflow-y-auto">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Preguntas Frecuentes</h2>
      <p class="text-muted-foreground text-sm md:text-base">
        Resolvemos tus dudas sobre la plataforma.
      </p>
    </div>

    <Accordion type="single" collapsible class="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿La app es gratuita para los vecinos?</AccordionTrigger>
        <AccordionContent>
          Sí, la aplicación es 100% gratuita para todos los ciudadanos. Nuestro objetivo es fomentar la participación sin barreras.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>¿Cómo se valida un reporte?</AccordionTrigger>
        <AccordionContent>
          Los reportes pasan por un filtro automático de ubicación y luego son validados por el equipo municipal para asegurar que sean problemas reales y de su competencia.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>¿La municipalidad puede responder o actualizar el estado?</AccordionTrigger>
        <AccordionContent>
          Absolutamente. La plataforma permite a la municipalidad cambiar el estado del reporte (Recibido, En Proceso, Resuelto) y agregar comentarios o fotos de la solución.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>¿Qué tipo de problemas puedo reportar?</AccordionTrigger>
        <AccordionContent>
          Puedes reportar baches, luminarias apagadas, basura acumulada, señaléticas dañadas, problemas en áreas verdes y cualquier situación que afecte el espacio público.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</section>
