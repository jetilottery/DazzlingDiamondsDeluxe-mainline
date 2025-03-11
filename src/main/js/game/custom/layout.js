define({
  // Optional display list in which to override elements from the template display list
  resultPlaquesContainer: {
    type: 'container',
    children: [
      'resultPlaqueOverlay',
      'winPlaqueBG',
      'winPlaqueMessage',
      'winPlaqueValue',
      'winPlaqueCloseButton',
      'losePlaqueBG',
      'losePlaqueMessage',
      'losePlaqueCloseButton',
    ],
    landscape: { x: 720, y: 377 },
    portrait: { x: 405, y: 678, scale: 0.9 },
  },
  winPlaqueMessage: {
    type: 'text',
    string: 'message_win',
    style: 'winPlaqueBody',
    y: -68,
    anchor: 0.5,
    maxWidth: 650,
  },

  winPlaqueValue: {
    type: 'text',
    style: 'winPlaqueValue',
    y: 40,
    anchor: 0.5,
    maxWidth: 650,
  },
  winAllAnim: {
    type: 'container',
    landscape: { x: 720, y: 377 },
    portrait: { x: 405, y: 678, scale: 0.9 },
  },
  winAllPlaque: {
    type: 'container',
    children: [
      'winAllBG',
      'winAllMessage',
      'winAllValue',
    ],
    landscape: { x: 720, y: 377 },
    portrait: { x: 405, y: 678, scale: 0.9 },
  },
  moveToMoneyButton: {
    type: 'button',
    string: 'button_moveToMoney',
    _maxWidth: 50,
    textures: {
      enabled: 'mainButtonEnabled',
      over: 'mainButtonOver',
      pressed: 'mainButtonPressed',
      disabled: 'mainButtonDisabled',
    },
    style: {
      enabled: 'mainButtonEnabled',
      over: 'mainButtonOver',
      pressed: 'mainButtonPressed',
      disabled: 'mainButtonDisabled',
    },
  },
});
