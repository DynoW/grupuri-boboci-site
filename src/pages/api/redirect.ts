import type { APIRoute } from "astro";

export const post: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const elevId = data.get("elevId");
  if (!elevId) {
    return new Response(
      JSON.stringify({
        message: "Illegal entry detected!",
      }),
      { status: 401 }
    );
  }
  return Response.redirect("http://localhost:3000/" + elevId);
};