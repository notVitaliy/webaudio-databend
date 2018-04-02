export const config = {
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
  convolver: {
    highCut: 22050,
    lowCut: 20,
    dryLevel: 1,
    wetLevel: 1,
    level: 1,
    impulse: 'CathedralRoom.wav',
  },
  gain: {
    value: 0.9,
  },
  detune: {
    value: 0,
  },
  playbackRate: {
    value: 1,
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
  wahwah: {
    automode: true,
    baseFrequency: 0.5,
    excursionOctaves: 2,
    sweep: 0.2,
    resonance: 10,
    sensitivity: 0.5,
  },
}
