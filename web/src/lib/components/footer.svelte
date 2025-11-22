<script>
  import { Github, Twitter, Linkedin } from 'lucide-svelte';
</script>

<footer class="bg-muted/30 border-t py-12 md:py-16">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid md:grid-cols-4 gap-8 mb-12">
      <div class="col-span-1 md:col-span-2">
        <div class="flex items-center gap-2 mb-4">
          <div class="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
            R
          </div>
          <span class="text-xl font-bold tracking-tight">ReportaCiudad</span>
        </div>
        <p class="text-muted-foreground max-w-xs mb-6">
          Conectando vecinos y municipios para construir mejores ciudades, un reporte a la vez.
        </p>
        <div class="flex gap-4">
          <a href="https://twitter.com" class="text-muted-foreground hover:text-primary transition-colors">
            <Twitter class="h-5 w-5" />
            <span class="sr-only">Twitter</span>
          </a>
          <a href="https://github.com" class="text-muted-foreground hover:text-primary transition-colors">
            <Github class="h-5 w-5" />
            <span class="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" class="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin class="h-5 w-5" />
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div>
        <h3 class="font-bold mb-4">Producto</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          <li><a href="/como-funciona" class="hover:text-foreground transition-colors">Cómo funciona</a></li>
          <li><a href="/ciudadanos" class="hover:text-foreground transition-colors">Para Ciudadanos</a></li>
          <li><a href="/municipios" class="hover:text-foreground transition-colors">Para Municipios</a></li>
          <li><a href="/casos-de-exito" class="hover:text-foreground transition-colors">Casos de éxito</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-4">Legal</h3>
        <ul class="space-y-3 text-sm text-muted-foreground">
          <li><a href="/terminos-de-servicio" class="hover:text-foreground transition-colors">Términos de servicio</a></li>
          <li><a href="/privacidad" class="hover:text-foreground transition-colors">Privacidad</a></li>
          <li><a href="/cookies" class="hover:text-foreground transition-colors">Cookies</a></li>
          <li><a href="/contacto" class="hover:text-foreground transition-colors">Contacto</a></li>
        </ul>
      </div>
    </div>
    
    <div class="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} ReportaCiudad. Todos los derechos reservados.</p>
      <p>Hecho con ❤️ por estudiantes universitarios.</p>
    </div>
  </div>
</footer>
