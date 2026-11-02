# nuxt-ts2321-repro

Minimal reproduction for `TS2321: Excessive stack depth comparing types` when a
`$fetch` call is returned from an arrow function while a server route returns a
Drizzle-inferred type.

```sh
bun install
bunx nuxt prepare
bunx nuxt typecheck
```

The two errors point at `app/app.vue(10,20)`.

Both changes make the errors disappear:

- Delete `server/api/admin/audit.get.ts`.
- Replace the arrow in `app/app.vue` with
  `run(async () => { await $fetch(...) })`.
