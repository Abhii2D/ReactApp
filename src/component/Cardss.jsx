import seri from "../api/seri.json";
import { Seridata } from "./Seridata";
import './prac.css'

export const Cardss = () => {
    const name = "Abhijeet Dhekane";
    return (
        <>
        <div className="container
">

      {seri.map((element)=> (
          <Seridata key={element.id}   e={element} />
        )
    )}
    </div>
        </>
    )
}
