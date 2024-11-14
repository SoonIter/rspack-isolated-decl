import { defineConfig } from 'tsdown';
import IsolatedDecl from 'unplugin-isolated-decl/rolldown';

export default defineConfig({
  entry: ['./src/*.ts','./src/*.tsx','!./src/*.d.ts', './src/utils/index.ts'],
  format: ['esm'],
  clean: true,
  outDir: 'dist-oxc',
  plugins: [
    IsolatedDecl({
      autoAddExts: true,
      patchCjsDefaultExport: true,

    }),
  ],
});
