Deno.serve(async (req) => {

  const url = new URL(req.url);

  // ROOT
  if (url.pathname === "/") {

    return new Response("SERVER_ONLINE");

  }

  // FILEINFO
  if (url.pathname === "/fileinfo") {

    const real = await fetch(
      "https://dl.dir.freefiremobile.com/common/ffwebsite/all/file_list/Android/fileinfo"
    );

    const data = await real.text();

    return new Response(data, {
      status: 200,
      headers: {
        "content-type": "text/plain"
      }
    });

  }

  // SHADER
  if (url.pathname === "/x-shader") {

    return new Response("SHADER_ROUTE_OK", {
      status: 200,
      headers: {
        "content-type": "application/octet-stream"
      }
    });

  }

  // ASSET
  if (url.pathname === "/assetindexer-v2") {

    return new Response("ASSET_ROUTE_OK", {
      status: 200,
      headers: {
        "content-type": "application/octet-stream"
      }
    });

  }

  return new Response("404", {
    status: 404
  });

});
