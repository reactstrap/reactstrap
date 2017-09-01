global.requestAnimationFrame = function (cb) { cb(0); };
global.window.cancelAnimationFrame = function () { };
global.createSpyObj = (baseName, methodNames) => {
  const obj = {};

  for (let i = 0; i < methodNames.length; i++) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {}
});
