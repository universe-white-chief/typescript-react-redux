import '@testing-library/jest-dom/extend-expect';
import {JSDOM} from 'jsdom';
import {configure} from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16';

configure({adapter: new EnzymeAdapter()});

// A dom environment is required when using enzyme/mount in node js.
((): void => {
  const jsDom = new JSDOM('<!doctype html><html><body></body></html>');
  // @ts-ignore
  global.document = jsDom.window.document;
  // @ts-ignore
  global.window = jsDom.window;
  // @ts-ignore
  global.history = jsDom.window.history;
  // @ts-ignore
  global.location = jsDom.window.location;
})();
