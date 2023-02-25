import React, { useEffect, useState } from "react";
import ms from "@/styles/Movie.module.css";
import Link from "next/link";
import { apiConfig, axiosRequest } from "./component/config";
import Image from "next/image";

const Movie = () => {
  const [data, setData] = useState();

  useEffect(() => {
    // axios(
    //   "https://api.themoviedb.org/3/movie/popular?api_key=f89a6c1f22aca3858a4ae7aef10de967"
    // ).then((res) => {
    //   setData(res.data.results);
    // });
    axiosRequest.get("/movie/popular").then((res) => {
      setData(res.data.results);
    });
  }, []);

  function searchFn(e) {
    e.preventDefault();
    axiosRequest.get(`/search/movie?query=${e.target.txt.value}`).then((res) => {
      setData(res.data.results);
    });
  }

  if (!data) return <>loading...</>; //값이 들어있지 않을때
  return (
    <div className={ms.list}>
      <h2>movie</h2>
      <p>
        <form onSubmit={searchFn}>
          <input type="text" name="txt" />
          <input type="submit" />
        </form>
      </p>
      <div>
        {data.map((obj,key) => {
          return (
            <figure key={key}>
              <Link href={{ pathname: "/detail", query: obj }}>
                <Image src={apiConfig.originImg(obj.poster_path)} alt={obj.title} />
                <figcaption>{obj.title}</figcaption>
              </Link>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Movie;
