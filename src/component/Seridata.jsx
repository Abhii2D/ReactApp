import cse from "./Seridata.module.css";
import styled from "styled-components";
const Btn = styled.button({
  color: "white",
  border:"2px solid white",
  width:"120px",
  height:'45px',
  marginLeft:"10px",
  fontSize:"large",
  backgroundColor:"black"
})
const Rat = styled.h4`
font-size:1.1rem;
color:green;
text-transform:captalize;`;
 const Buttons = styled.button`
 padding:10px;
 color: black;
 cursor:pointer;
 font-size : 1.2rem;

 fontWeight:bold;
 border:2px solid black;
 width:150px;
 height:45px;
 background-color : ${(props) => props.rating >= 8.5 ? "#7FFFD4":"#f7dc6f"};
 margin-Top:10px;`
 ;
export const Seridata = (props) => {

  //export const Seridata = ({e}) =>{

  // 1 const { e } = props;

  //   2 exposrt const seridata = ({e}) = > e is here object is can be any type of name
  //     const {id,img_url,name,rating,description,cast,genre,watch_url} = e;

  //   3 way of using props with map and another method

  // Using Styled COmponent css style
 
 
  const { id, img_url, name, rating, description, cast, genre, watch_url } =
  props.e;

  const ratingClass = rating >= 8.5 ? cse.super_hit : cse.bad_hit;
  return (
    <div key={id} className={cse.cards}>
      <div className={cse.imgg}>
        <img src={img_url} alt="ops" />
      </div>
      <div className={cse.con2}>


      <h4>Name : {name}</h4>
      <Rat>Rating : 
        
      <span className={`${cse.rating} ${ratingClass}`}>
        {rating}</span>
      </Rat>
      <p className="underline">Summary : {description}</p>
      <p>Gender : {genre}</p>
      <p>Cast : {cast}</p>
      </div>
     <div>

      <a href={watch_url} target="_blank" >
        <button className={`${cse.buttons} ${ratingClass}`}>Watch Now</button>
  <Btn>watch me</Btn>
  <Buttons rating={rating}>StyledBTn</Buttons>    
      </a>
      </div>
    </div>
  );
};
