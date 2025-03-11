define({
  // Optional config in which to overrid configuration options from the template. Alternatively
  // place options in i18n/default/default/config.json to override at skin level.
  
  // Big win particle config, defaults used if parameters missing
  bigWinSettings: {
    landscape:{animatedParticlePrefix: 'diamondSpin_00', startFrame: 0, endFrame: 23},
    portrait:{animatedParticlePrefix: 'diamondSpin_00', startFrame: 0, endFrame: 23}
  },
  winAllHighlightInterval: 0.15,
  // Result coin/particle shower config, defaults used if parameters missing
  resultParticleConfig: {
    level1: {
      enabled: false,
      landscape: {speed: {start: 1100, end: 1500, minimumSpeedMultiplier: 1}, frequency: 0.12, scale: {start: 0.74, end: 0.78, minimumScaleMultiplier: 0.74}, emitterLifetime: 2},
      portrait: {speed: {start: 1100, end: 1500, minimumSpeedMultiplier: 1}, frequency: 0.12, scale: {start: 0.74, end: 0.78, minimumScaleMultiplier: 0.74}, emitterLifetime: 2}
    },
    level2: {
      enabled: true,
      landscape: {rotationSpeed: {min: -90, max: 90}, acceleration: {x: 0, y: 1500}, speed: {start: 1600, end: 2100, minimumSpeedMultiplier: 0.8}, frequency: 0.005, scale: {start: 0.94, end: 1.45, minimumScaleMultiplier: 0.94}, emitterLifetime: 0.35},
      portrait: {rotationSpeed: {min: -90, max: 90}, acceleration: {x: 0, y: 1500}, speed: {start: 2000, end: 2500, minimumSpeedMultiplier: 0.8}, frequency: 0.005, scale: {start: 0.94, end: 1.45, minimumScaleMultiplier: 0.94}, emitterLifetime: 0.35}
    },
    level3: {
      enabled: true,
      landscape: {rotationSpeed: {min: -90, max: 90}, acceleration: {x: 0, y: 1500}, speed: {start: 1600, end: 2100, minimumSpeedMultiplier: 0.8}, frequency: 0.0025, scale: {start: 0.94, end: 1.45, minimumScaleMultiplier: 0.94}, emitterLifetime: 0.35},
      portrait: {rotationSpeed: {min: -90, max: 90}, acceleration: {x: 0, y: 1500}, speed: {start: 2000, end: 2500, minimumSpeedMultiplier: 0.8}, frequency: 0.0025, scale: {start: 0.94, end: 1.45, minimumScaleMultiplier: 0.94}, emitterLifetime: 0.35}
    }
  },
  // Background particle config
  backgroundParticleConfig: {
    base: {color: {start: "#9c2ba3", end: "#9c2ba3"}},
    bonus: {color: {start: "#9c2ba3", end: "#9c2ba3"}}
  },
  // Scale Big Win with result plaque (if Big Win sits directly behind plaque)
  scaleBigWinWithPlaque: true,
  // Override max button width
  overrideMaxButtonWidth: true
});
