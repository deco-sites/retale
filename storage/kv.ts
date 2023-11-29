import {
  compress,
  decompress,
  init,
} from "https://deno.land/x/zstd_wasm@0.0.20/deno/zstd.ts";

const initPromise = init();

let kv: Deno.Kv | null = null;
try {
  kv = await Deno?.openKv().catch((_err) => null);
} catch {
  console.warn("please run with `--unstable` to enable deno kv support");
}

const encoder = new TextEncoder();
const decoder = new TextDecoder();

const DEFAULT_EXPIRATION_MS = 1_000 * 60 * 60 * 24; // ONE_DAY
/**
 * Utility for Object Storage.
 */
export const ObjectStorage = {
  get: async <T>(key: string[]): Promise<T | null> => {
    await initPromise;
    return kv
      ? await kv.get<Uint8Array>(key).then((v) =>
        v.value !== null
          ? JSON.parse(decoder.decode(decompress(v.value))) as T
          : null
      )
      : null;
  },
  set: async <T>(key: string[], data: T, expireIn = DEFAULT_EXPIRATION_MS) => {
    await initPromise;
    if (!kv) {
      throw new Error("kv is not available");
    }
    // TODO compressing string as a workflow for maximum size of a key (which is 64kb, should we use R2 instead?)
    await kv.set(key, compress(encoder.encode(JSON.stringify(data)), 10), {
      expireIn,
    });
  },
};
