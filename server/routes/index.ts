export default eventHandler((event) => {
  const myVa = event.context.cloudflare.env.MV_VAR;
      // ^?
  const myKv = event.context.cloudflare.env.MY_KV;
      // ^?
  return "Start by editing <code>server/routes/index.ts</code>.";
});
