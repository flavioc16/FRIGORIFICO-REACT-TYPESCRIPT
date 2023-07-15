import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from 'react';
import { api } from "../../services/apiClient";

//Header
import Header from "../../components/Header";

export default function Home() {

  
  return (
    <>
    <Header/>
     <h1>Painel</h1>
    </>
  );
}
