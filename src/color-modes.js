/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Modified by PAIL Technologies inc. to an ES6 module, to prevent FOUC (with JS
 * snippet in HTML), and to observe style guide.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

export function initialiseThemeSwitcher() {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme');
  const setStoredTheme = theme => localStorage.setItem('theme', theme);

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if(storedTheme) { return storedTheme; }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' :
                                                                       'light';
  }

  const setTheme = theme => {
    if((theme === 'auto') &&
       window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } 
    else {
      document.documentElement.setAttribute('data-bs-theme', theme);
    }
  }

  const showActiveTheme = (theme) => {
    const themeSwitcher = document.querySelector('#bd-theme');
    if(!themeSwitcher) return;

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active');
      element.setAttribute('aria-pressed', 'false');
    })

    const btnToActive =
                    document.querySelector(`[data-bs-theme-value="${theme}"]`);
    if(btnToActive) {
      btnToActive.classList.add('active');
      btnToActive.setAttribute('aria-pressed', 'true');
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
    const storedTheme = getStoredTheme();
    if((storedTheme !== 'light') && (storedTheme !== 'dark')) {
      setTheme(getPreferredTheme());
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll('[data-bs-theme-value]').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const theme = toggle.getAttribute('data-bs-theme-value');
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme);
      })
    })
  })
}
