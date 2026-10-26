// If Google's preferred-source button doesn't render (blocked script, or the
// site isn't eligible yet), show a plain link to the same Google page instead.
setTimeout(function(){
  document.querySelectorAll('[google-add-preferred-source-btn]').forEach(function(el){
    if (el.children.length) return;
    var a = document.createElement('a');
    a.href = 'https://www.google.com/preferences/source?q=hoopslinkprep.com';
    a.target = '_blank'; a.rel = 'noopener';
    a.className = 'btn btn-outline btn-sm source-fallback';
    a.textContent = 'Add Hoops Link Prep on Google';
    el.appendChild(a);
  });
}, 4000);

// Analytics event tracking for the /news pages (same events as the homepage)
(function(){
  if (typeof gtag !== 'function') return;

  document.querySelectorAll('a[href*="calendly.com"]').forEach(function(el){
    el.addEventListener('click', function(){
      gtag('event', 'book_call_click', { event_category: 'conversion', event_label: 'Calendly' });
    });
  });

  document.querySelectorAll('a[href="/#apply"]').forEach(function(el){
    el.addEventListener('click', function(){
      gtag('event', 'apply_nav_click', { event_category: 'engagement', event_label: el.textContent.trim() });
    });
  });

  document.querySelectorAll('a[href*="wa.me"]').forEach(function(el){
    el.addEventListener('click', function(){
      gtag('event', 'whatsapp_click', { event_category: 'conversion', event_label: 'WhatsApp' });
    });
  });

  document.querySelectorAll('a[href*="instagram.com"], a[href*="twitter.com"]').forEach(function(el){
    el.addEventListener('click', function(){
      gtag('event', 'social_click', { event_category: 'engagement', event_label: el.href });
    });
  });

  document.querySelectorAll('[google-add-preferred-source-btn]').forEach(function(el){
    el.addEventListener('click', function(){
      gtag('event', 'preferred_source_click', { event_category: 'engagement', event_label: location.pathname });
    });
  });
})();
