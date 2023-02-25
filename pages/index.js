
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Movie from "./movie";
import Layout from "./component/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <main>
          <header>
            <h1>TheMovie</h1>
            <nav>
              <Link href="/"> Movie </Link>
              <Link href="/"> TV</Link>
            </nav>
          </header>

          <main>
            <Movie />
          </main>
        </main>
      </Layout>
    </>
  );
}
