function loadDefaultCalendly() {

  var calendlyWidget = document.getElementById('calendly-widget');
  calendlyWidget.innerHTML = '<div class="calendly-inline-widget" data-url="https://calendly.com/evegirardot/seance-de-kinesiologie?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=71a152" style="min-width:320px;height:700px;"></div>';

  // Chargez le script externe Calendly pour mettre à jour le widget
  var script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);

}

// Fonction pour changer dynamiquement le calendrier en fonction du lieu sélectionné
function showCalendly(selectedPlace) {
  var calendlyWidget = document.getElementById('calendly-widget');

  // Mettez en correspondance le lieu sélectionné avec le lien Calendly correspondant
  var calendlyLinks = {
    'seance-de-kinesiologie': 'https://calendly.com/evegirardot/seance-de-kinesiologie?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=71a152',
    'seance-de-kinesiologie-troyes': 'https://calendly.com/evegirardot/seance-de-kinesiologie-troyes?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=dbc472',
    'seance-de-kinesiologie-dijon': 'https://calendly.com/evegirardot/seance-de-kinesiologie-dijon?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=333333',
    // Ajoutez d'autres liens pour chaque lieu au besoin
  };

  // Changez dynamiquement le lien du widget Calendly
  calendlyWidget.innerHTML = '<div class="calendly-inline-widget" data-url="' + calendlyLinks[selectedPlace] + '" style="min-width:320px;height:700px;"></div>';

  // Rechargez le script externe Calendly pour mettre à jour le widget
  var script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);
}

// Chargez le calendrier par défaut dès le chargement de la page
loadDefaultCalendly();

