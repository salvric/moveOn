TweenMax.to("#layer-01", 0.1, { autoAlpha: 0 });
TweenMax.to("#layer-02", 0.1, { autoAlpha: 0 });
TweenMax.from("#shape", 1, { width: "100%", height: "100%", top: 0, left: 0 });
TweenMax.to("#layer-01", 0.4, { autoAlpha: 1, width: "80%", delay: 2.3 });
TweenMax.to("#layer-02", 0.3, { autoAlpha: 1, delay: 2.6 });

function goAhead() {
    TweenMax.to("#side-left", 0.5, { width: "0%", delay: 2.9 });
    TweenMax.to("#shape", 0.1, { boxShadow: 0, delay: 2.8 });
    TweenMax.to("#layer-01", 0.2, { boxShadow: 0, delay: 3 });
    TweenMax.to("#layer-02", 0.2, { boxShadow: 0, delay: 3.3 });
}