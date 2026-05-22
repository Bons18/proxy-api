Deno.serve((req) => {

  const url = new URL(req.url);

  // HOME
  if (url.pathname === "/") {
    return new Response("SERVER_ONLINE");
  }

  // FILEINFO
  if (url.pathname === "/fileinfo") {
    return new Response("FILEINFO_OK");
  }

  // SHADER
  if (url.pathname === "/x-shader") {
    return new Response("SHADER_OK");
  }

  // ASSET
  if (url.pathname === "/assetindexer-v2") {
    return new Response("ASSET_OK");
  }

  return new Response("404", {
    status: 404
  });

});
