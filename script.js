// Handle tab switching and save last selected tab
function showTab(tab) {
  // Save selected tab in localStorage
  localStorage.setItem('selectedTab', tab);

  // Toggle visibility
  document.getElementById('heirlooms-tab').style.display = tab === 'heirlooms' ? 'block' : 'none';
  document.querySelector('.tracker-container').style.display = tab === 'tracker' ? 'flex' : 'none';

  // Toggle button highlight
  document.getElementById('tracker-btn').classList.toggle('active', tab === 'tracker');
  document.getElementById('heirlooms-btn').classList.toggle('active', tab === 'heirlooms');
}

// Load saved tab on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTab = localStorage.getItem('selectedTab') || 'tracker';
  showTab(savedTab);

  // Initialize all pack trackers
  document.querySelectorAll('.pack-tracker').forEach(container => {
    const baseInput = container.querySelector('.base-input');
    const specialInput = container.querySelector('.special-input');
    const baseOutput = container.querySelector('.base-output');
    const specialOutput = container.querySelector('.special-output');
    const totalOutput = container.querySelector('.total-output');

    const updateTotals = () => {
      const base = parseInt(baseInput.value) || 0;
      const special = parseInt(specialInput.value) || 0;
      const total = base + special;

      baseOutput.textContent = base;
      specialOutput.textContent = special;
      totalOutput.textContent = total;
    };

    baseInput.addEventListener('input', updateTotals);
    specialInput.addEventListener('input', updateTotals);
  });
});
