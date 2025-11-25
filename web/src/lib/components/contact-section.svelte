<script>
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { MapPin, Phone, Mail } from 'lucide-svelte';
</script>

<section id="contacto" class="py-24 md:py-32 bg-background">
  <div class="container px-4 md:px-6 mx-auto">
    <div class="grid lg:grid-cols-3 gap-12">
      <!-- Contact Info -->
      <div>
        <div class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-accent text-accent-foreground mb-6">
          Contacto
        </div>
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Hablemos
        </h2>

        <div class="space-y-6">
          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Mail class="h-5 w-5" />
            </div>
            <div>
              <p class="font-bold text-sm">Email</p>
              <a href="mailto:hola@temutrack.cl" class="text-muted-foreground hover:text-primary transition-colors">
                hola@temutrack.cl
              </a>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <Phone class="h-5 w-5" />
            </div>
            <div>
              <p class="font-bold text-sm">Teléfono</p>
              <a href="tel:+56912345678" class="text-muted-foreground hover:text-primary transition-colors">
                +56 9 1234 5678
              </a>
            </div>
          </div>

          <div class="flex gap-4">
            <div class="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <MapPin class="h-5 w-5" />
            </div>
            <div>
              <p class="font-bold text-sm">Ubicación</p>
              <p class="text-muted-foreground">
                Temuco, Región de La Araucanía, Chile
              </p>
            </div>
          </div>
        </div>

        <!-- Map placeholder -->
        <div class="mt-8 rounded-lg overflow-hidden h-64 bg-muted border">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1556.819721647275!2d-72.55167115355266!3d-38.70312567637626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d25eaf6a6155%3A0x1923a4870c05054c!2sRudecindo%20Ortega%2C%20Temuco%2C%20Araucan%C3%ADa!5e0!3m2!1sen!2scl!4v1764085622217!5m2!1sen!2scl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="lg:col-span-2">
        <div class="rounded-2xl border bg-muted/30 p-8 md:p-12">
          <h3 class="text-2xl font-bold mb-8">Envíanos un mensaje</h3>

          <form class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label for="nombre">Nombre completo</Label>
                <Input
                  id="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div class="space-y-2">
                <Label for="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <Label for="comuna">Comuna</Label>
                <Input
                  id="comuna"
                  placeholder="Ej: Temuco"
                />
              </div>
              <div class="space-y-2">
                <Label for="tipo">Tipo de usuario</Label>
                <select id="tipo" class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="ciudadano">Ciudadano</option>
                  <option value="municipio">Funcionario Municipal</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </div>

            <div class="space-y-2">
              <Label for="mensaje">Mensaje</Label>
              <textarea
                id="mensaje"
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows="5"
                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              ></textarea>
            </div>

            <Button class="w-full bg-[#111] hover:bg-secondary/90 text-white  h-12">
              Enviar mensaje
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
