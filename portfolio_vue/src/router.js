import { createRouter, createWebHistory } from 'vue-router';

// Import Vue components with corrected names
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import EducationSection from './components/EducationSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import VolunteeringSection from './components/VolunteeringSection.vue';
import CertificationsSection from './components/CertificationsSection.vue';
import ContactSection from './components/ContactSection.vue';

// Create Vue Router routes
const routes = [
  { path: '/', component: HomeSection },
  { path: '/about', component: AboutSection },
  { path: '/education', component: EducationSection },
  { path: '/experience', component: ExperienceSection },
  { path: '/skills', component: SkillsSection },
  { path: '/volunteering', component: VolunteeringSection },
  { path: '/certifications', component: CertificationsSection },
  { path: '/contact', component: ContactSection },
];

// Create Vue Router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
