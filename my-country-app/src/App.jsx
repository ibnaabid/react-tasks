import Country from "./country";
import { Suspense } from "react";

const apiPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json());

export default function App() {

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Country Project</h1>

      <Suspense fallback={<p>Loading Countries...</p>}>
        <Country apiMessage={apiPromise}></Country>
      </Suspense>

    </div>
  )
}