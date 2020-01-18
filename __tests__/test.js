let Sidebar = require('../dist/index.umd.js');

test('creates new instance', () => {
  let s = new Sidebar({
    id: 'OKOQo8va',
    key: 'IK-JNLo8SXM-hRW1lcLUU'
  });

  expect(s.iframe.tagName).toEqual('IFRAME');
  expect(s.element.tagName).toEqual('DIV');
});

test('opens, closes and toggles', () => {
  let s = new Sidebar({
    id: 'OKOQo8va',
    key: 'IK-JNLo8SXM-hRW1lcLUU'
  });

  expect(s.isOpen).toBeFalsy();
  s.open();
  expect(s.isOpen).toBeTruthy();
  s.close();
  expect(s.isOpen).toBeFalsy();
  s.toggle();
  expect(s.isOpen).toBeTruthy();
  s.toggle();
  expect(s.isOpen).toBeFalsy();
});
