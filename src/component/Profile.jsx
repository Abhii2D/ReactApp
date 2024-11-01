export const Profile = (props) => {
  return (
    <>
      <div>
        <p>{props.name}</p>
        <p>Age : {props.age}</p>
        <div>{props.children}</div>
      </div>
    </>
  );
};
