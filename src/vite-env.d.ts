/* eslint-disable @typescript-eslint/no-require-imports */
/// <reference types="vite/client" />

/// <reference types="vite/client" />

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
  }