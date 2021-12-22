import Head from "next/head";
import { Counter } from "src/components/Counter";

export default function Home() {
  return (
    <div>
      <main>
        <h1>
          Welcome to{" "}
          <a href="https://nextjs.org">
            My Starter
          </a>
        </h1>

        <Counter />
      </main>

      <footer style={{marginTop: 40}}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  );
}
