const metricButton = document.getElementById('metric');
const imperialButton = document.getElementById('imperial');
const metricButtonValues = document.getElementById('metric-values-section');
const imperialButtonValues = document.getElementById('imperial-values-section'); 

metricButton.addEventListener('change', function() {
    if (metricButton.checked) {
        metricButtonValues.classList.remove('hide');
        imperialButtonValues.classList.add('hide');
    }
});

imperialButton.addEventListener('change', function() {
    if (imperialButton.checked) {
        imperialButtonValues.classList.remove('hide');
        metricButtonValues.classList.add('hide');
    }
});




