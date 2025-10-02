import type { StorybookConfig } from '@storybook/react-vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-themes"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  async viteFinal(config) {
    config.plugins = config.plugins || [];
    config.plugins.push(vanillaExtractPlugin());

    // Configure build settings
    config.build = config.build || {};
    config.build.chunkSizeWarningLimit = 3000; // Increase limit to 3000 kB
    config.build.minify = 'terser'; // Use terser for better compression
    config.build.rollupOptions = config.build.rollupOptions || {};
    config.build.rollupOptions.output = {
      manualChunks: (id) => {
        // Vendor chunks
        if (id.includes('node_modules')) {
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('@storybook')) {
            return 'vendor-storybook';
          }
          return 'vendor-other';
        }
      },
    };

    return config;
  }
};
export default config;