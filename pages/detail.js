import { useRouter } from "next/router";
import React from "react";
import { apiConfig } from "./component/config";
import ms from "@/styles/Movie.module.css";
import Layout from "./component/layout";

const Detail = () => {
  const router = useRouter();

  return (
    <Layout>
      <div
        className={ms.detail}
        style={{
          background: `url(${apiConfig.smallImg(
            router.query.backdrop_path
          )}) 0 0/cover no-repeat`,
        }}
      >
        <article>
          <h2>{router.query.title}</h2>
          <ul>
            <li>{router.query.overview}</li>
            <li>RottenTomato : {router.query.vote_average}</li>
            <li>
              <img src={apiConfig.smallImg(router.query.poster_path)} />
            </li>
          </ul>
        </article>
      </div>
    </Layout>
  );
};

export default Detail;
