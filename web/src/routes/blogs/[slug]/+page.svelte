<script>
  import { page } from '$app/stores';
  import { ArrowLeft, Calendar, User } from 'lucide-svelte';

  $: slug = $page.params.slug;

  // Datos de blogs (puedes mover a un archivo separado si crece)
  const blogs = {
    'guia-reportes-temuco': {
      title: 'Cómo hacer un reporte efectivo en Temuco: Guía paso a paso 2025',
      date: '3 Dic 2025',
      author: 'Equipo TemuTrack',
      image: '/blog/junta.avif',
      content: `
        <p class="lead">Esta guía está diseñada para vecinos de Temuco que quieren reportar problemas urbanos de manera efectiva. Te explicamos paso a paso los canales oficiales, qué información incluir y cómo hacer seguimiento.</p>

        <h2>Introducción: La realidad en Temuco</h2>
        <p>¿Te ha pasado? Ese bache en Avenida Pedro de Valdivia que casi te hace caer, las luminarias apagadas en Villa Alegre que generan inseguridad nocturna, o las veredas rotas en El Carmen que dificultan el paso. La frustración común es no saber a quién recurrir o cómo hacer que tu reporte sea escuchado.</p>

        <h2>Canales oficiales de la Municipalidad de Temuco</h2>
        
        <h3>1. OIRS (Oficina de Información, Reclamos y Sugerencias)</h3>
        <ul>
          <li><strong>Ubicación:</strong> Edificio Municipal, Prat 650, Temuco</li>
          <li><strong>Horario:</strong> Lunes a viernes de 8:30 a 17:30</li>
          <li><strong>Cómo usarlo:</strong> Presenta tu reclamo presencial con formulario y documentación respaldatoria (fotos, descripción escrita)</li>
        </ul>

        <h3>2. Sitio web municipal</h3>
        <ul>
          <li><strong>URL:</strong> <a href="https://www.temuco.cl" target="_blank">www.temuco.cl</a></li>
          <li><strong>Proceso:</strong> Busca el formulario de contacto o sistema de denuncias online, crea cuenta si es necesario, adjunta fotos y describe la ubicación exacta</li>
        </ul>

        <h3>3. Teléfono municipal</h3>
        <ul>
          <li><strong>Número general:</strong> +56 45 2979100</li>
          <li><strong>Departamentos clave:</strong> Dirección de Obras, Aseo y Ornato, Tránsito</li>
        </ul>

        <h3>4. Correo electrónico</h3>
        <ul>
          <li><strong>Direcciones oficiales:</strong> oirs@temuco.cl, contacto@temuco.cl</li>
          <li><strong>Formato recomendado:</strong> Asunto claro, cuerpo estructurado, fotos adjuntas</li>
        </ul>

        <h3>5. Redes sociales</h3>
        <ul>
          <li><strong>Facebook:</strong> @MunicipalidadDeTemuco</li>
          <li><strong>Instagram:</strong> Verifica cuenta oficial</li>
          <li><strong>Importante:</strong> Algunos casos reciben respuesta más rápida por presión pública, pero no sustituye el canal oficial</li>
        </ul>

        <h2>Qué información debe incluir un buen reporte</h2>

        <h3>Ubicación exacta</h3>
        <ul>
          <li>Calle completa con número o intersección</li>
          <li>Sector o población (ej: "Calle Los Aromos esquina Los Boldos, Villa Alegre")</li>
          <li>Referencias visibles: "frente al consultorio", "al lado del almacén Don José"</li>
        </ul>

        <h3>Descripción clara y detallada</h3>
        <ul>
          <li><strong>Tipo de desperfecto:</strong> bache, luminaria apagada, vereda hundida, reja rota, semáforo sin funcionar</li>
          <li><strong>Dimensiones:</strong> "bache de aprox. 50 cm de diámetro y 15 cm de profundidad"</li>
          <li><strong>Antigüedad:</strong> "existe hace al menos 3 meses"</li>
        </ul>

        <h3>Fotografía de calidad</h3>
        <ul>
          <li>Buena iluminación natural</li>
          <li>Mostrar el problema completo y su contexto</li>
          <li>Incluir elemento de referencia para escala (zapato, botella, regla)</li>
          <li>Foto general del entorno para ubicación</li>
        </ul>

        <h3>Nivel de riesgo o urgencia</h3>
        <ul>
          <li><strong>Peligro inmediato:</strong> hoyo en zona escolar, poste a punto de caer, fuga de agua</li>
          <li><strong>Problema crónico:</strong> afecta calidad de vida pero no es emergencia</li>
        </ul>

        <h3>Datos de contacto</h3>
        <ul>
          <li>Nombre completo</li>
          <li>RUT (para seguimiento oficial)</li>
          <li>Teléfono y correo electrónico</li>
        </ul>

        <h3>Fecha y hora</h3>
        <p>Siempre registra cuándo detectaste el problema y cuándo hiciste el reporte.</p>

        <h2>Ejemplo real paso a paso</h2>
        <div class="bg-muted p-6 rounded-lg my-6">
          <p><em>Carmen Soto vive en Villa Alegre y detectó un bache peligroso. Aquí está el reporte que envió:</em></p>
          
          <p class="mt-4"><strong>Asunto:</strong> Solicitud urgente de reparación de bache peligroso en Villa Alegre</p>
          <p><strong>Fecha:</strong> 3 de diciembre de 2025</p>
          <p><strong>Ubicación:</strong> Calle Los Boldos, altura 1450, entre Los Aromos y Los Cipreses, Villa Alegre, Temuco.</p>
          <p><strong>Descripción:</strong> Bache de 60 cm de diámetro y 20 cm de profundidad en calzada, lado derecho norte-sur. Presente hace 4 meses. Alto tránsito peatonal y ciclista (cercano a escuela y consultorio). Dos caídas de ciclistas en la última semana. Riesgo importante para niños y adultos mayores.</p>
          <p><strong>Adjunto:</strong> 3 fotografías (vista general, detalle con zapato de referencia, contexto con paradero)</p>
          <p><strong>Contacto:</strong> Carmen Soto Pérez, RUT 14.567.890-1, +56 9 8765 4321, carmen.soto@email.com</p>
        </div>

        <h2>Qué hacer si no hay respuesta</h2>

        <h3>Plazos legales</h3>
        <p>La Ley 19.880 establece que la OIRS debe:</p>
        <ul>
          <li>Entregar acuse de recibo inmediato</li>
          <li>Responder el fondo del reclamo en máximo 15 días hábiles</li>
          <li>Prorrogable a 30 días en casos justificados</li>
        </ul>

        <h3>Seguimiento del caso</h3>
        <ul>
          <li>Solicita siempre número de folio o ticket</li>
          <li>Guarda comprobantes (correos, capturas, formularios)</li>
          <li>Haz seguimiento telefónico antes del vencimiento del plazo</li>
        </ul>

        <h3>Escalar el reclamo</h3>
        <p>Si no hay respuesta satisfactoria:</p>
        <ul>
          <li>Presenta reclamo ante la Contraloría Regional de la Araucanía</li>
          <li>Acude a Defensoría Ciudadana municipal (si existe)</li>
          <li>Contacta concejales de tu distrito</li>
        </ul>

        <h3>Respaldos y evidencia</h3>
        <p>Mantén carpeta con todas las comunicaciones, fechas, fotos con metadata, nombres de funcionarios y respuestas. Esta documentación es crucial para reclamos formales.</p>

        <h2>Herramientas complementarias</h2>
        <p>Aunque los canales oficiales son el mecanismo formal, muchos vecinos complementan con:</p>
        <ul>
          <li><strong>Grupos de WhatsApp/Telegram:</strong> Documentar problemas recurrentes y hacer reportes coordinados (múltiples vecinos aumentan visibilidad)</li>
          <li><strong>Redes sociales:</strong> Visibilizar casos urgentes marcando cuenta oficial (puede generar respuesta más rápida)</li>
          <li><strong>Junta de vecinos:</strong> Solicitudes colectivas que representan a toda la población</li>
          <li><strong>Plataformas ciudadanas digitales:</strong> Centralizar reportes, seguimiento colaborativo, mapas de problemas y estadísticas para negociaciones</li>
        </ul>

        <h2>Cierre motivacional</h2>
        <p class="lead">Cada reporte bien hecho es una contribución concreta a la seguridad y calidad de vida en Temuco. Si bien el proceso puede parecer burocrático, la evidencia muestra que los reportes documentados, persistentes y respaldados por la comunidad tienen mayor probabilidad de ser atendidos.</p>
        <p>Un barrio organizado que reporta de manera sistemática y mantiene seguimiento es un barrio que construye poder ciudadano real.</p>
        <p><strong>Comparte esta guía con tus vecinos, familiares y organizaciones territoriales. Juntos podemos mejorar Temuco.</strong></p>
      `
    },
    'casos-exitosos-temuco': {
      title: '5 casos reales donde los reportes ciudadanos lograron cambios en Temuco',
      date: '2 Dic 2025',
      author: 'Vecinos de Temuco',
      image: '/blog/gestion.png',
      content: `
        <p class="lead">¿Funciona realmente reportar? Aquí te mostramos 5 casos verificables de vecinos de Temuco que lograron solucionar problemas urbanos. Descubre qué hicieron bien y cuánto tiempo tomó cada solución.</p>

        <h2>Caso 1: Bache en zona escolar</h2>
        <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <h3 class="text-primary mt-0">Problema</h3>
          <p>Familia de Pedro Aguirre Cerda reportó bache profundo frente a escuela básica. El hoyo había causado caída de dos niños en bicicleta en la última semana.</p>
          
          <h3 class="text-primary">Qué hicieron bien</h3>
          <ul>
            <li>Adjuntaron 4 fotos: vista general, detalle del bache con regla para dimensiones, contexto mostrando proximidad a escuela, foto de señalética de zona escolar</li>
            <li>Enfatizaron el riesgo específico para menores de edad</li>
            <li>Mencionaron accidentes previos con fechas aproximadas</li>
            <li>Destacaron ubicación estratégica (zona escolar = más vulnerabilidad)</li>
            <li>Hicieron seguimiento telefónico a los 10 días</li>
          </ul>

          <h3 class="text-primary">Resultado</h3>
          <p><strong>✅ Solución en 18 días</strong></p>
          <p>La municipalidad priorizó la reparación por el riesgo para menores. El departamento de Obras envió cuadrilla especializada.</p>
        </div>

        <h2>Caso 2: Luminarias apagadas en población</h2>
        <div class="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg my-6">
          <h3 class="text-secondary mt-0">Problema</h3>
          <p>Villa Alegre tenía 12 luminarias sin funcionar en sector de 6 cuadras. Los vecinos reportaban inseguridad nocturna y dos asaltos en el último mes.</p>
          
          <h3 class="text-secondary">Qué hicieron bien</h3>
          <ul>
            <li>La junta de vecinos presentó reporte colectivo firmado por 45 familias</li>
            <li>Crearon mapa del sector con ubicación exacta de cada poste sin luz (numerados del 1 al 12)</li>
            <li>Incluyeron testimonios escritos de 8 vecinos sobre inseguridad</li>
            <li>Vincularon el problema con estadísticas policiales del sector (PDI)</li>
            <li>Solicitaron reunión presencial con director de Alumbrado Público</li>
          </ul>

          <h3 class="text-secondary">Resultado</h3>
          <p><strong>✅ Solución en 25 días</strong></p>
          <p>Las 12 luminarias fueron reparadas. El reporte colectivo organizado demostró impacto comunitario real y facilitó la gestión técnica con ubicaciones claras.</p>
        </div>

        <h2>Caso 3: Vereda rota que afectaba accesibilidad</h2>
        <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <h3 class="text-primary mt-0">Problema</h3>
          <p>Adulto mayor de 72 años reportó vereda hundida en calle Los Boldos que impedía paso de su silla de ruedas. Debía desviarse 3 cuadras para llegar al consultorio.</p>
          
          <h3 class="text-primary">Qué hicieron bien</h3>
          <ul>
            <li>Citó explícitamente la <strong>Ley 20.422 de Inclusión</strong> sobre accesibilidad universal</li>
            <li>Adjuntó video de 1 minuto mostrando imposibilidad de paso con silla de ruedas</li>
            <li>Incluyó carta del consultorio certificando que el paciente asiste regularmente (3 veces por semana)</li>
            <li>Solicitó priorización por ser persona en situación de discapacidad</li>
            <li>Envió copia del reporte a Oficina de Discapacidad municipal</li>
          </ul>

          <h3 class="text-primary">Resultado</h3>
          <p><strong>✅ Solución en 30 días</strong></p>
          <p>La vinculación con marco legal de accesibilidad generó respuesta prioritaria. Se repararon 20 metros de vereda y se instaló rampa normalizada.</p>
        </div>

        <h2>Caso 4: Basural ilegal en sitio eriazo</h2>
        <div class="bg-secondary/5 border-l-4 border-secondary p-6 rounded-r-lg my-6">
          <h3 class="text-secondary mt-0">Problema</h3>
          <p>Sitio eriazo en sector centro se había convertido en basural con escombros, colchones, electrodomésticos y basura domiciliaria. Presencia visible de roedores.</p>
          
          <h3 class="text-secondary">Qué hicieron bien</h3>
          <ul>
            <li>Documentación sistemática: tomaron fotos cada 7 días durante 5 semanas mostrando crecimiento del problema</li>
            <li>Todas las fotos con metadata de fecha y hora visible</li>
            <li>Destacaron riesgo sanitario citando presencia de ratas y mal olor</li>
            <li>Identificaron al propietario del sitio mediante consulta en Conservador de Bienes Raíces</li>
            <li>Solicitaron fiscalización sanitaria (SEREMI de Salud) además del municipio</li>
          </ul>

          <h3 class="text-secondary">Resultado</h3>
          <p><strong>✅ Solución en 10 días</strong></p>
          <p>La documentación fotográfica en serie demostró evolución del problema. Fiscalización sanitaria presionó al propietario. Municipio hizo limpieza de urgencia y multó al dueño del terreno.</p>
        </div>

        <h2>Caso 5: Semáforo peatonal sin funcionar</h2>
        <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <h3 class="text-primary mt-0">Problema</h3>
          <p>Semáforo peatonal de Avenida Alemania (sector comercial) llevaba 2 semanas sin funcionar. Peatones cruzaban sin protección en zona de alta velocidad vehicular.</p>
          
          <h3 class="text-primary">Qué hicieron bien</h3>
          <ul>
            <li>Comerciante grabó video de 2 minutos mostrando flujo vehicular y cruces peligrosos de peatones (adultos mayores, niños)</li>
            <li>Destacó que la ubicación es paradero de alta afluencia (línea 1 y 7 de micros)</li>
            <li>Mencionó que es zona comercial con colegios cercanos (horario peak escolar)</li>
            <li>Enviaron el reporte simultáneamente a: Departamento de Tránsito, OIRS, y Carabineros del sector</li>
            <li>Publicaron video en redes sociales etiquetando cuenta oficial del municipio</li>
          </ul>

          <h3 class="text-primary">Resultado</h3>
          <p><strong>✅ Solución en 7 días</strong></p>
          <p>El video en redes sociales generó presión pública. La evidencia audiovisual de alto riesgo en zona estratégica aceleró respuesta. Equipo técnico reparó el semáforo y verificó funcionamiento de otros 5 del sector.</p>
        </div>

        <h2>Aprendizajes comunes: Factores de éxito</h2>
        <div class="bg-accent p-8 rounded-xl my-8">
          <h3 class="mt-0">✅ Documentación fotográfica o en video</h3>
          <p>Fotos de calidad, con contexto, referencias de escala y metadata de fecha son evidencia irrefutable.</p>

          <h3>✅ Descripción clara del riesgo</h3>
          <p>No solo describir el problema, sino explicar el peligro concreto: quiénes están en riesgo, qué puede pasar, qué ya ha pasado.</p>

          <h3>✅ Seguimiento persistente pero respetuoso</h3>
          <p>Llamar, escribir, acudir presencialmente sin agresividad pero con firmeza demuestra seriedad del reporte.</p>

          <h3>✅ Respaldo comunitario cuando es posible</h3>
          <p>Reportes colectivos (junta de vecinos, grupo de vecinos) tienen más peso que casos individuales.</p>

          <h3>✅ Mención de marco legal cuando aplica</h3>
          <p>Citar leyes de accesibilidad, normativa sanitaria, reglamento de tránsito, etc. muestra conocimiento y seriedad.</p>

          <h3>✅ Paciencia estratégica + presión organizada</h3>
          <p>Esperar los plazos legales pero mantener presión mediante seguimiento constante y escalamiento si es necesario.</p>
        </div>

        <h2>Tu reporte también puede ser exitoso</h2>
        <p class="lead">Estos 5 casos demuestran que <strong>sí es posible lograr cambios</strong> cuando los reportes están bien documentados, son persistentes y tienen respaldo comunitario.</p>
        <p>La clave no es solo denunciar, sino hacerlo estratégicamente: con evidencia, marco legal cuando aplica, seguimiento sistemático y, cuando sea posible, con el poder de la organización vecinal.</p>
        <p><strong>¿Tienes un problema en tu barrio? Usa estos ejemplos como guía y empieza a documentar tu caso hoy mismo.</strong></p>
      `
    },
    'transformar-espacio-publico': {
      title: 'Cómo los reportes ciudadanos pueden transformar el espacio público de tu barrio',
      date: '1 Dic 2025',
      author: 'Participación Ciudadana',
      image: '/blog/Equipo.png',
      content: `
        <p class="lead">Los reportes ciudadanos bien formulados no son solo quejas: son herramientas de empoderamiento que pueden transformar tu barrio. Te explicamos cómo convertir frustración en datos útiles para la gestión municipal.</p>

        <h2>El escenario cotidiano: Frustración sin respuesta</h2>
        <p>Es una historia repetida en todos los barrios de Temuco:</p>
        <ul>
          <li>Vecinos que se quejan del mismo hoyo desde hace meses en grupos de WhatsApp</li>
          <li>Fotos de luminarias apagadas compartidas en Facebook sin obtener respuesta oficial</li>
          <li>Llamadas telefónicas a la municipalidad que terminan en "tome nota de su reclamo"</li>
          <li>La sensación de que nadie escucha, nadie actúa, nada cambia</li>
        </ul>

        <p>Pero, ¿y si el problema no fuera la falta de denuncias, sino <strong>cómo se están haciendo esas denuncias</strong>?</p>

        <h2>La diferencia entre quejarse y reportar estratégicamente</h2>
        
        <div class="grid md:grid-cols-2 gap-6 my-8">
          <div class="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
            <h3 class="text-red-700 dark:text-red-400 mt-0">❌ Queja inefectiva</h3>
            <p><em>"En mi calle hay un hoyo terrible desde hace meses y nadie hace nada"</em></p>
            <p class="text-sm text-muted-foreground">Publicado en Facebook, sin foto, sin ubicación exacta, sin seguimiento formal</p>
          </div>

          <div class="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg">
            <h3 class="text-green-700 dark:text-green-400 mt-0">✅ Reporte estratégico</h3>
            <p><em>"Bache de 60cm de diámetro en calle Los Boldos altura 1450, Villa Alegre. Presente hace 4 meses. Adjunto 3 fotos con fecha. Riesgo para ciclistas y peatones."</em></p>
            <p class="text-sm text-muted-foreground">Enviado a OIRS con folio de seguimiento, datos de contacto, solicitud de plazo de respuesta</p>
          </div>
        </div>

        <h2>Por qué los reportes estructurados funcionan mejor</h2>

        <h3>1. Generan datos verificables</h3>
        <p>Un reporte con foto, ubicación GPS, descripción detallada y fecha es <strong>evidencia objetiva</strong>. No es una queja subjetiva, es un dato concreto que puede ser ingresado a un sistema de gestión municipal.</p>

        <h3>2. Permiten priorización justa</h3>
        <p>Cuando los municipios reciben reportes estructurados, pueden:</p>
        <ul>
          <li>Clasificar problemas por tipo (baches, luminarias, veredas, basurales)</li>
          <li>Identificar zonas críticas (si 15 reportes coinciden en el mismo sector, es prioritario)</li>
          <li>Evaluar nivel de riesgo (bache en zona escolar vs. bache en calle residencial tranquila)</li>
          <li>Asignar recursos de manera más eficiente</li>
        </ul>

        <h3>3. Crean trazabilidad y responsabilidad</h3>
        <p>Un reporte oficial con número de folio genera:</p>
        <ul>
          <li>Compromiso formal del municipio de responder</li>
          <li>Plazos legales que deben cumplirse (Ley 19.880)</li>
          <li>Posibilidad de escalamiento si no hay respuesta</li>
          <li>Registro histórico que demuestra negligencia si el problema persiste</li>
        </ul>

        <h2>Cómo hacer un buen reporte: Guía práctica</h2>

        <h3>Paso 1: Documenta con fotografía de calidad</h3>
        <div class="bg-accent p-6 rounded-lg my-4">
          <h4 class="mt-0">✅ Qué fotografiar</h4>
          <ul class="mb-0">
            <li><strong>Vista general:</strong> contexto del problema (calle completa, entorno visible)</li>
            <li><strong>Detalle del problema:</strong> acercamiento al desperfecto con elemento de referencia para escala (zapato, botella, regla)</li>
            <li><strong>Referencia de ubicación:</strong> número de casa, nombre de calle visible, comercio cercano</li>
            <li><strong>Evidencia de riesgo:</strong> si aplica, mostrar cercanía a escuela, paradero, cruce peatonal</li>
          </ul>
        </div>

        <h3>Paso 2: Describe con precisión</h3>
        <p>Un buen reporte incluye:</p>
        <ul>
          <li><strong>Ubicación exacta:</strong> calle, número o intersección, sector, referencias visibles</li>
          <li><strong>Tipo de problema:</strong> bache, luminaria apagada, vereda rota, basural, señalética dañada</li>
          <li><strong>Dimensiones aproximadas:</strong> "hoyo de 50 cm de diámetro y 15 cm de profundidad"</li>
          <li><strong>Antigüedad:</strong> "presente hace al menos 3 meses" o "apareció la semana pasada"</li>
          <li><strong>Nivel de riesgo:</strong> quiénes están en peligro (niños, adultos mayores, ciclistas, peatones en general)</li>
        </ul>

        <h3>Paso 3: Explica el impacto en la comunidad</h3>
        <p>No solo describas el problema técnico, sino su impacto humano:</p>
        <ul>
          <li>"Tres vecinos han caído en este hoyo en el último mes"</li>
          <li>"Las luminarias apagadas generan inseguridad nocturna, especialmente para mujeres que vuelven solas del trabajo"</li>
          <li>"La vereda rota impide el paso de sillas de ruedas y coches de bebé"</li>
          <li>"El basural atrae roedores y genera mal olor que afecta a 20 familias del sector"</li>
        </ul>

        <h3>Paso 4: Usa los canales oficiales correctos</h3>
        <p>Para que tu reporte tenga validez legal y genere obligación de respuesta:</p>
        <ul>
          <li>OIRS presencial o digital</li>
          <li>Correo electrónico oficial (oirs@temuco.cl)</li>
          <li>Formulario web del municipio</li>
          <li>Teléfono municipal con registro de llamada</li>
        </ul>
        <p><strong>Las redes sociales pueden complementar, pero no sustituyen el canal oficial.</strong></p>

        <h3>Paso 5: Haz seguimiento sistemático</h3>
        <ul>
          <li>Guarda el número de folio o comprobante de envío</li>
          <li>Anota fecha de presentación del reporte</li>
          <li>Calcula plazo legal de respuesta (15 días hábiles)</li>
          <li>Llama o escribe antes del vencimiento para consultar estado</li>
          <li>Si no hay respuesta, escala: Contraloría, concejales, Defensoría Ciudadana</li>
        </ul>

        <h2>El poder de la organización vecinal</h2>
        <p>Los reportes individuales son importantes, pero los reportes colectivos tienen más impacto:</p>

        <div class="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-6">
          <h3 class="text-primary mt-0">Ejemplo de reporte colectivo exitoso</h3>
          <p>En Villa Alegre, la junta de vecinos recopiló 15 reportes individuales de luminarias sin funcionar en el mismo sector. En vez de 15 reportes dispersos, presentaron un solo reporte colectivo con:</p>
          <ul class="mb-0">
            <li>Mapa del sector con ubicación exacta de cada poste (numerados)</li>
            <li>Firmas de 45 familias afectadas</li>
            <li>Testimonios sobre inseguridad nocturna</li>
            <li>Estadísticas policiales del sector</li>
          </ul>
          <p class="mt-4"><strong>Resultado: las 12 luminarias fueron reparadas en 25 días.</strong></p>
        </div>

        <h2>Corresponsabilidad: Ciudadanía + Autoridad</h2>
        <p>La participación ciudadana no es solo exigir al municipio. Es también:</p>
        <ul>
          <li><strong>Ser ojos en el territorio:</strong> detectar problemas temprano antes de que se agraven</li>
          <li><strong>Aportar información de calidad:</strong> fotos, descripciones, testimonios que faciliten la gestión técnica</li>
          <li><strong>Colaborar en el seguimiento:</strong> verificar que las soluciones sean efectivas, reportar si el problema persiste</li>
          <li><strong>Construir memoria colectiva:</strong> documentar qué problemas se han resuelto, cuáles persisten, qué zonas son más críticas</li>
        </ul>

        <p>Cuando ciudadanía y municipio trabajan con información clara, verificable y sistematizada, las decisiones son más justas y transparentes.</p>

        <h2>De la frustración a la acción: Tu reporte cuenta</h2>
        <p class="lead">Cada vez que reportas un bache con foto y ubicación exacta, estás generando un dato útil. Cuando 10 vecinos reportan problemas distintos en el mismo sector, están mostrando una zona crítica que merece prioridad. Cuando haces seguimiento de tu reporte, estás ejerciendo tu derecho a ser escuchado y exigiendo rendición de cuentas.</p>

        <p><strong>Los reportes ciudadanos bien hechos no son quejas en el aire: son herramientas de poder.</strong></p>

        <div class="bg-accent p-8 rounded-xl my-8 text-center">
          <h3 class="mt-0">¿Listo para transformar tu barrio?</h3>
          <p class="mb-4">Empieza hoy. Identifica un problema en tu calle, documéntalo con foto, descríbelo con precisión y repórtalo por canal oficial.</p>
          <p class="mb-0 font-semibold">Un barrio que reporta sistemáticamente es un barrio que construye ciudadanía activa.</p>
        </div>
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

      <div class="prose prose-lg prose-slate dark:prose-invert max-w-none
        prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-3
        prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
        prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
        prose-p:text-base prose-p:leading-relaxed prose-p:mb-4
        prose-ul:my-4 prose-ul:space-y-2
        prose-li:text-base
        prose-strong:text-foreground prose-strong:font-semibold
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-img:rounded-lg prose-img:shadow-lg
        [&_.lead]:text-xl [&_.lead]:text-muted-foreground [&_.lead]:leading-relaxed [&_.lead]:mb-8">
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