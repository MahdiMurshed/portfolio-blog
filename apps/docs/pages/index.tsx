import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/about">
        <a>
          <h2>About Page &rarr;</h2>
          <p>Cypress will test if this link is working.</p>
        </a>
      </Link>
    </div>
  );
}
