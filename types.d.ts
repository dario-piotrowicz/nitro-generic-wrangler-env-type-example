import type { KVNamespace } from '@cloudflare/workers-types';

declare module 'wrangler' {
    interface Env {
      MV_VAR: string;
      MY_KV: KVNamespace;
    }
}
