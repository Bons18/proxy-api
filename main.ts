Deno.serve((req) => {

  const url = new URL(req.url);

  if (url.pathname === "/fileinfo") {
    return new Response("FILEINFO_OK");
  }

  if (url.pathname === "/x-shader") {
    return new Response("SHADER_OK");
  }

  if (url.pathname === "/assetindexer-v2") {
    return new Response("ASSET_OK");
  }

  return new Response("404", {
    status: 404
  });

});
