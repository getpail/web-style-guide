/**
 * Copyright PAIL Technologies inc. 2026
 * BootstraPAIL combines Bootstrap 5.x and the color theme switcher in a single
 * module.
 */

// Import the entire Bootstrap library, including Popper
import 'bootstrap';

// Import the color theme switching logic
import { initialiseThemeSwitcher } from './color-modes.js';

// Initialise the color theme switcher following the page load
if(document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialiseThemeSwitcher);
}
else {
  initialiseThemeSwitcher();
}

// Export the entire Bootstrap library for other modules to use
export * from 'bootstrap';