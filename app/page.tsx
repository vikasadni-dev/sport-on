"use client";

import Image from "next/image";
import Button from "./components/button";
import {useState} from "react";

export default function Home() {
const [textButton, setTextButton] = useState("Klik Disini")
  return (
    <div className="bg-white">
      <Button text={textButton}/>
    </div>);
}