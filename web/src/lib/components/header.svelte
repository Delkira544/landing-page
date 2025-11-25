<script>
  import { Menu, X } from 'lucide-svelte';
  import { Button } from "$lib/components/ui/button";
  
  let isMenuOpen = $state(false);
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
</script>

<header class="sticky top-0 z-50 w-full border-b bg-white">
  <div class="container mx-auto px-4 md:px-6">
    <div class="flex h-16 items-center justify-between">
      <div class="flex items-center gap-2">
         <div class="h-16 w-16 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold">
          <img src="/icono.svg" alt="Logo" class="h-16 w-12 aspect-square" />
        </div>
        <span class="text-xl font-bold tracking-tight">TemuTrack</span>
      </div>

      <!-- Desktop Nav -->
      <!-- added new navigation links to planes, blog, and contacto -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="#como-funciona" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          ¿Cómo funciona?
        </a>
        <a href="#ciudadanos" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Ciudadanos
        </a>
        <a href="#municipios" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Municipios
        </a>
        <a href="#planes" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Planes
        </a>
        <a href="#blog" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Blog
        </a>
        <a href="#contacto" class="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
          Contacto
        </a>
        <div class="flex items-center gap-4 ml-2">
          <Button variant="ghost" size="sm">Iniciar Sesión</Button>
          <Button size="sm" class="bg-secondary hover:bg-secondary/90 text-white">Descargar App</Button>
        </div>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="md:hidden p-2" onclick={toggleMenu} aria-label="Toggle menu">
        {#if isMenuOpen}
          <X class="h-6 w-6" />
        {:else}
          <Menu class="h-6 w-6" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  <!-- added new mobile navigation links -->
  {#if isMenuOpen}
    <div class="md:hidden border-t p-4 bg-background space-y-4 animate-in slide-in-from-top-5">
      <nav class="flex flex-col gap-4">
        <a href="#como-funciona" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          ¿Cómo funciona?
        </a>
        <a href="#ciudadanos" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          Ciudadanos
        </a>
        <a href="#municipios" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          Municipios
        </a>
        <a href="#planes" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          Planes
        </a>
        <a href="#blog" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          Blog
        </a>
        <a href="#contacto" class="text-sm font-medium text-foreground" onclick={() => isMenuOpen = false}>
          Contacto
        </a>
        <div class="flex flex-col gap-2 pt-4 border-t">
          <Button variant="outline" class="w-full justify-start">Iniciar Sesión</Button>
          <Button class="w-full bg-secondary hover:bg-secondary/90 text-white justify-start">Descargar App</Button>
        </div>
      </nav>
    </div>
  {/if}
</header>
