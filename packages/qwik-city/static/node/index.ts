import type { StaticGeneratorOptions } from '../types';
import { generate as coreGenerate } from '../core';
import { createSystem } from './node-system';
import { isMainThread } from 'worker_threads';

export async function generate(opts: StaticGeneratorOptions) {
  try {
    const sys = await createSystem(opts);
    await coreGenerate(sys);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

(async () => {
  if (!isMainThread) {
    // await generate(workerData);
  }
})();

export { createSystem };
