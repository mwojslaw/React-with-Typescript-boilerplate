import { configure } from '@storybook/react';

function loadStories() {
  const reg = require.context("../src", true, /.stories.tsx$/);
  reg.keys().forEach(filename => reg(filename));
}

configure(loadStories, module);
