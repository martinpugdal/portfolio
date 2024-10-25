<template>
  <div class="min-h-screen bg-background text-foreground">
<!-- Sticky Header -->
    <header :class="['fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out', 
                     isScrolled ? 'bg-background/80 backdrop-blur-sm py-2 shadow-md' : 'bg-background py-6']">
      <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <h1 :class="['font-bold transition-all duration-300 ease-in-out', 
                     isScrolled ? 'text-xl' : 'text-2xl']">
          Martin Pugdal Pedersen
        </h1>
        <nav>
          <ul class="flex space-x-4">
            <li v-for="item in navItems" :key="item.href">
              <a 
                 :class="['hover:text-primary transition-colors px-3 py-2', 
                          isScrolled ? 'text-sm' : 'text-base']" v-on:click="smoothScroll(item.section)">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-12 mt-16">
      <!-- About Section (Updated) -->
      <section id="about" class="mb-16 alignScrollABit">
        <h2 class="text-3xl font-bold mb-8 text-primary text-center">Om mig</h2>
        <div class="flex flex-col md:flex-row items-center md:items-start gap-8 bg-card text-card-foreground rounded-lg shadow-lg p-6">
          <div class="w-48 h-48 md:w-64 md:h-64 relative">
            <img 
              src="/placeholder.svg?height=400&width=400" 
              alt="John Doe" 
              class="rounded-full w-full h-full object-cover shadow-lg border-4 border-primary"
            />
            <div class="absolute inset-0 rounded-full shadow-inner"></div>
          </div>
          <div class="flex-1">
            <p class="mb-4 text-lg">
              Hi, I'm John Doe, a passionate web developer with expertise in Vue.js, React, and Node.js.
              I love creating beautiful and functional web applications that solve real-world problems.
            </p>
            <p class="mb-4 text-lg">
              With over 5 years of experience in the industry, I've had the opportunity to work on a wide range of projects,
              from small business websites to large-scale enterprise applications.
            </p>
            <p class="text-lg">
              When I'm not coding, you can find me hiking in the mountains, experimenting with new recipes in the kitchen,
              or contributing to open-source projects.
            </p>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="mb-16 alignScrollABit">
        <h2 class="text-3xl font-bold mb-4">My Projects</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="project in projects" :key="project.id" class="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden">
            <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="mb-4">{{ project.description }}</p>
              <a :href="project.link" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3">
                Se projekt
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Form -->
      <section id="contact" class="alignScrollABit">
        <h2 class="text-3xl font-bold mb-4">Kontakt mig</h2>
        <form @submit.prevent="handleSubmit" class="bg-card text-card-foreground rounded-lg shadow-lg p-6">
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium mb-1">Navn</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium mb-1">Besked</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="4"
              class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
          <button type="submit" class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3">
            Send besked
          </button>
        </form>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-muted py-6 mt-12">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Martin Pugdal Pedersen. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// projects
const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution built with Vue.js and Node.js.',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A responsive task management application using Vue.js and Vuex.',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A real-time weather dashboard integrating multiple APIs.',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  },
  {
    id: 4,
    title: 'Social Media Analytics Tool',
    description: 'An analytics dashboard for social media performance tracking.',
    image: '/placeholder.svg?height=300&width=400',
    link: '#'
  }
])

// nav bar
const navItems = [
  { label: 'Om mig', section: 'about' },
  { label: 'Projekter', section: 'projects' },
  { label: 'Kontakt', section: 'contact' },
]

// forms
const form = ref({
  name: '',
  email: '',
  message: ''
})
const handleSubmit = () => {
  form.value = { name: '', email: '', message: '' }
  alert('Tak fordi du tog dig til at skrive til mig, jeg svarer dig når jeg har set din besked')
}

// scroll
const isScrolled = ref(false)
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleScroll)
})
const smoothScroll = (section) => {
  document.getElementById(section).scrollIntoView(
    {
      behavior: 'smooth',
    }
  );
}
</script>

<style>
.alignScrollABit {
  scroll-margin-top: 5rem;
}
</style>