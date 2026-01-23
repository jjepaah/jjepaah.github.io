// Main entry point for all JavaScript
// Import all modules here
import { initGithubCorner } from './github-corner.js';
import { initTabs } from './tabs.js';

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initGithubCorner();
  initTabs();
  
  // Future components can be initialized here
  // initAnotherComponent();
});
