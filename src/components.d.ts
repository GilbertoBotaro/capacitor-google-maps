/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  CapacitorGoogleMaps as CapacitorGoogleMaps
} from './components/capacitor-google-maps/capacitor-google-maps';

declare global {
  interface HTMLCapacitorGoogleMapsElement extends CapacitorGoogleMaps, HTMLStencilElement {
  }
  var HTMLCapacitorGoogleMapsElement: {
    prototype: HTMLCapacitorGoogleMapsElement;
    new (): HTMLCapacitorGoogleMapsElement;
  };
  interface HTMLElementTagNameMap {
    "capacitor-google-maps": HTMLCapacitorGoogleMapsElement;
  }
  interface ElementTagNameMap {
    "capacitor-google-maps": HTMLCapacitorGoogleMapsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "capacitor-google-maps": JSXElements.CapacitorGoogleMapsAttributes;
    }
  }
  namespace JSXElements {
    export interface CapacitorGoogleMapsAttributes extends HTMLAttributes {
      apikey?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
