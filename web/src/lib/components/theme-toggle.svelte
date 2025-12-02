<script>
  import { onMount } from 'svelte';
  import { Moon, Sun } from 'lucide-svelte';
  
  let isDark = $state(false);
  
  onMount(() => {
    // Leer preferencia guardada o del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    applyTheme(isDark);
  });
  
  function toggleTheme() {
    isDark = !isDark;
    applyTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  function applyTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
</script>

<button
  onclick={toggleTheme}
  class="relative inline-flex h-9 w-16 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
  class:bg-primary={isDark}
  class:bg-muted={!isDark}
  aria-label="Toggle theme"
>
  <span
    class="pointer-events-none inline-block h-7 w-7 transform rounded-full bg-background shadow-lg transition-transform flex items-center justify-center"
    class:translate-x-8={isDark}
    class:translate-x-1={!isDark}
  >
    {#if isDark}
      <Moon class="h-4 w-4 text-primary" />
    {:else}
      <Sun class="h-4 w-4 text-muted-foreground" />
    {/if}
  </span>
</button>
