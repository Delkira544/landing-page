<script>
  import { Button } from "$lib/components/ui/button";
  import { ArrowRight, Download } from 'lucide-svelte';
</script>

<section class="relative overflow-hidden pt-4 md:pt-4 lg:pt-4 pb-18">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="flex flex-col gap-6 text-center lg:text-left">
        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary w-fit mx-auto lg:mx-0">
          Nuevo: Reportes en tiempo real
        </div>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
          La forma más fácil de reportar problemas en tu ciudad
        </h1>
        <p class="text-lg text-muted-foreground md:text-xl text-balance leading-relaxed max-w-[600px] mx-auto lg:mx-0">
          Con ReportaCiudad, cualquier vecino puede subir reportes de problemas urbanos y la municipalidad puede gestionarlos desde un solo lugar.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
          <Button size="lg" class="bg-secondary hover:bg-secondary/90 text-white text-base h-12 px-8">
            <Download class="mr-2 h-5 w-5" />
            Descargar la app
          </Button>
          <Button variant="outline" size="lg" class="text-base h-12 px-8 bg-[#1B426B] text-white">
            Solicitar demo municipal
            <ArrowRight class="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div class="flex items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground pt-4">
          <div class="flex -space-x-2">
            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted font-bold text-xs">JM</span>
            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted font-bold text-xs">AG</span>
            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted font-bold text-xs">LR</span>
          </div>
          <p>Usado por +5,000 vecinos</p>
        </div>
      </div>
      
      <div class="relative mx-auto lg:ml-auto w-full max-w-[300px] lg:max-w-[400px] aspect-[9/19] bg-black rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden">
        <!-- Phone Notch -->
        <div class="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto z-20">
        </div>
        
        <!-- App Screen Placeholder -->
        <div class="relative h-full w-full bg-white flex flex-col">
           <img 
            src="/telefono.png" 
            alt="Ciudadanos usando a"
          /> 
            
            <!-- Floating UI Elements Simulation -->
            <div class="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border">
                <div class="flex items-center gap-3 mb-3">
                   <div class="h-10 w-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                   </div>
                   <div>
                     <p class="font-bold text-sm">Bache peligroso</p>
                     <p class="text-xs text-muted-foreground">Av. Principal 123 • Hace 5 min</p>
                   </div>
                </div>
                <div class="h-2 w-full bg-secondary/20 rounded-full overflow-hidden">
                    <div class="h-full w-1/3 bg-secondary"></div>
                </div>
                <p class="text-[10px] text-right mt-1 text-muted-foreground">En revisión</p>
            </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Background decoration -->
  <div class="absolute top-0 right-0 -z-10 h-[600px] w-[600px] bg-primary/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/4"></div>
  <div class="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] bg-secondary/5 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/4"></div>
</section>
