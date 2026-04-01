export default async function TripPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <pre style={{ padding: 24, color: "white", background: "black", minHeight: "100vh" }}>
      {JSON.stringify({ slug: params.slug }, null, 2)}
    </pre>
  );
}
