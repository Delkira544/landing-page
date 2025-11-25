<script>
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "$lib/components/ui/accordion";
</script>

<section id="faq" class="py-24 md:py-32 bg-muted/30">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="max-w-5xl mx-auto"> <!-- Cambiado: aumentado a max-w-5xl para dar más espacio a las dos columnas -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">Preguntas Frecuentes</h2>
        <p class="text-muted-foreground">
          Resolvemos dudas típicas de ciudadanos y municipios.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-20 md:items-start"> <!-- Agregado: md:items-start para alinear las columnas arriba -->
        <!-- Ciudadanos -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-primary text-center">Para Ciudadanos</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="cuidadano-1">
              <AccordionTrigger>¿La app es gratuita para los vecinos?</AccordionTrigger>
              <AccordionContent>
                Sí, la aplicación es 100% gratuita para todos los ciudadanos. Nuestro objetivo es fomentar la participación sin barreras económicas. La municipalidad es quien se suscribe al servicio.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuidadano-2">
              <AccordionTrigger>¿Qué tipos de problemas puedo reportar?</AccordionTrigger>
              <AccordionContent>
                Puedes reportar baches, luminarias apagadas, basura acumulada, señaléticas dañadas, problemas en áreas verdes, servicios deficientes o cualquier situación que afecte el espacio público de tu ciudad.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuidadano-3">
              <AccordionTrigger>¿Cómo sigo el estado de mi reporte?</AccordionTrigger>
              <AccordionContent>
                Una vez reportado, recibirás notificaciones sobre cada cambio de estado. Puedes ver en la app: "Enviado" → "En Revisión" → "En Proceso" → "Resuelto". Además, podrás ver fotos y comentarios de la solución.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuidadano-4">
              <AccordionTrigger>¿Mi información personal es segura?</AccordionTrigger>
              <AccordionContent>
                Sí. Todos tus datos están protegidos bajo normativa de privacidad chilena y se usan únicamente para gestionar tus reportes. Puedes revisar nuestra política de privacidad completa en el footer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuidadano-5">
              <AccordionTrigger>¿Puedo reportar de forma anónima?</AccordionTrigger>
              <AccordionContent>
                Puedes completar tu perfil con datos mínimos. Tu reporte será considerado igual, pero sin datos de contacto la municipalidad no podrá notificarte sobre el progreso.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <!-- Municipios -->
        <div>
          <h3 class="text-lg font-bold mb-4 text-primary text-center">Para Municipios</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="municipio-1">
              <AccordionTrigger>¿Cómo se valida que un reporte es real?</AccordionTrigger>
              <AccordionContent>
                El sistema realiza un filtro automático por ubicación y categoría. Luego, el equipo municipal revisa el reporte (foto, descripción, ubicación GPS) antes de asignarlo a cuadrillas. Pueden rechazarlo si está fuera de su competencia.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="municipio-2">
              <AccordionTrigger>¿La plataforma se integra con nuestros sistemas?</AccordionTrigger>
              <AccordionContent>
                Sí. Ofrecemos API documentation y soporte para integrar TemuTrack con tus sistemas ERP, SIRCO u otros. Los planes Mediano y Grande incluyen integraciones personalizadas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="municipio-3">
              <AccordionTrigger>¿Cuántos usuarios puede haber en el dashboard?</AccordionTrigger>
              <AccordionContent>
                Sin límite. Puedes crear usuarios para directores, supervisores, operarios de cuadrillas y administrativos. Cada uno tiene permisos diferenciados según su rol.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="municipio-4">
              <AccordionTrigger>¿Qué reportes mensuales recibimos?</AccordionTrigger>
              <AccordionContent>
                Reciben análisis de: reportes por categoría, tiempos de respuesta, zonas críticas, satisfacción ciudadana y KPIs de gestión. Útil para planificación presupuestaria y justificación de recursos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="municipio-5">
              <AccordionTrigger>¿Hay soporte técnico incluido?</AccordionTrigger>
              <AccordionContent>
                Todos los planes incluyen soporte por email y chat. Los planes Mediano y Grande tienen soporte prioritario. El plan Enterprise incluye soporte 24/7 con SLA garantizado.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
</section>
