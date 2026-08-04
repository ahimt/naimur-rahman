/**
 * Naimur Rahman - A4 Resume Vanilla JavaScript
 * Pure Client-side Interactive Script
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnPrint = document.getElementById('btnPrint');
  
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Keyboard shortcut Ctrl+P or Cmd+P helper
  window.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
      // Allow browser native print dialog
    }
  });
});
