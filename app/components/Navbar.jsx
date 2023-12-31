import Link from "next/link";
export default function navbar() {
  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create">Add Ticket</Link>
    </nav>
  );
}
