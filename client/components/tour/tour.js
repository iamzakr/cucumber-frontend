let tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows'
  }
});

tour.addStep('welcome', {
  title: 'Welcome to the Cucumber dashboard',
  text: 'Adding a box is simple, let me show you',
  classes: 'shepherd-theme-default',
  buttons: [
    {
      text: 'Show me!',
      action: tour.next
    },
    {
      text: 'No thanks',
      action: tour.cancel
    }
  ],
}).addStep('view location button', {
  title: 'Your locations',
  text: 'Click locations to view all your locations in your network',
  attachTo: '.location-tour-step bottom',
  classes: 'shepherd-theme-default',
  buttons: [],
}).addStep('finish', {
  title: 'Well done!',
  text: 'Enjoy your new dashboard',
  classes: 'shepherd-theme-default',
  buttons: [
    {
      text: 'Yay!',
      action: tour.next
    }
  ],
})

$(".md-button").click(function() {
  if (locationClickStep.isOpen()) {
    return Shepherd.activeTour.next();
  }
});