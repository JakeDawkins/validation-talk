import { future as theme } from 'mdx-deck/themes';

import style from 'react-syntax-highlighter/styles/prism/tomorrow';
import prismJSON from 'react-syntax-highlighter/languages/prism/json';
import prismTypeScript from 'react-syntax-highlighter/languages/prism/typescript';
import prismBash from 'react-syntax-highlighter/languages/prism/bash';

// #270088
// #f900af
// #757792
// #f7f8fa
// #323c5c

const colors = {
  background: '#f7f8fa',
  blue: '#0af',
  code: '#f900af',
  link: '#f900af',
  pre: '#f900af',
  accent: '#f900af',
  accentText: '#f7f8fa',
  preBackground: '#000',
  text: '#222',
};
export default {
  ...theme,
  transitionDuration: '.2s',
  prism: {
    style,
    languages: {
      json: prismJSON,
      typescript: prismTypeScript,
      shell: prismBash,
    },
  },
  code: {
    letterSpacing: '0.1em',
    backgroundColor: colors.code,
    color: colors.accentText,
    padding: '0 4px',
    whiteSpace: 'normal',
  },
  pre: {
    whiteSpace: 'normal',
  },
  h1: {
    ...theme.h1,
    backgroundColor: colors.accent,
    color: colors.accentText,
    padding: '8px',
  },
  h2: {
    ...theme.h2,
    padding: '8px',
    textDecoration: 'underline',
    textDecorationColor: colors.accent,
    textAlign: 'left',
  },
  blockquote: {
    borderLeft: `8px solid ${colors.accent}`,
    paddingLeft: '32px',
  },
  colors,
};
