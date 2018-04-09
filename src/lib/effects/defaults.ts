export const defaults = {
  biquad: {
    type: 'lowpass',
    frequency: 4000,
    gain: 1,
    detune: 0,
    q: 5,
  },
  bitcrusher: {
    bits: 16,
    normfreq: 0.44,
    bufferSize: 4096,
  },
  chrorus: {
    rate: 1.5,
    feedback: 0.2,
    delay: 0.0045,
    bypass: 0,
  },
  compressor: {
    threshold: -1,
    makeupGain: 1,
    attack: 1,
    release: 0,
    ratio: 4,
    knee: 5,
    automakeup: true,
  },
  convolver: {
    highCut: 22050,
    lowCut: 20,
    dryLevel: 1,
    wetLevel: 1,
    level: 1,
    impulse: 'CathedralRoom.wav',
  },
  delay: {
    feedback: 0.45,
    delayTime: 150,
    wetLevel: 0.25,
    dryLevel: 1,
    cutoff: 2000,
  },
  filter: {
    frequency: 440,
    Q: 1,
    gain: 0,
    filterType: 'lowpass',
  },
  gain: {
    value: 0.9,
  },
  pingPong: {
    feedback: 0.4,
    wetLevel: 0.75,
    delayTimeLeft: 10,
    delayTimeRight: 10,
  },
  phaser: {
    rate: 1.2,
    depth: 0.6,
    feedback: 0.5,
    stereoPhase: 10,
    baseModulationFrequency: 1500,
  },
  termelo: {
    intensity: 0.3,
    rate: 4,
    stereoPhase: 0,
  },
  wahwah: {
    automode: true,
    baseFrequency: 0.5,
    excursionOctaves: 2,
    sweep: 0.2,
    resonance: 10,
    sensitivity: 0.5,
  },
}
