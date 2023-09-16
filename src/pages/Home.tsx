import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router";

type Props = {};

function Home({}: Props) {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/list-tasks");
  }, [navigate]);
  return <div>Home</div>;
}

export default Home;
