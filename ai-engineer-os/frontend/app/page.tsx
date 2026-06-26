async function getDashboard() {
  const res = await fetch(
    "http://127.0.0.1:8000/dashboard",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Home() {
  const data = await getDashboard();

  return (
    <main>
      <h1>AI Engineer OS</h1>

      <p>Papers Read: {data.papers_read}</p>
      <p>Projects Active: {data.projects_active}</p>
      <p>Coding Hours: {data.coding_hours}</p>
    </main>
  );
}