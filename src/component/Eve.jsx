import './Eve.css';
export const Eve = () =>{
    const handleButtonClick = ( event)=>{
        
        alert("hello evernt handling leacture");
    }
    const handleButtonClick2 = (user) => {
        alert(`hey ${user} , welcome`);
    }
    const sanuli = () =>{
        alert("love you yaar");
    }
    return(
    <>
    <div className='con'>

        <h1>Eventhandling in ReactJS</h1>
         {/* Function component with named function */}
        <button onClick={handleButtonClick}>Click Me</button>
    {/* function component with fact arrow fucntion */}
        <button onClick={() => handleButtonClick()}>Click Me</button>
       {/* fucntion with paramether and argument */}
        <button onClick={() => handleButtonClick2("Abhijeet")}>para Me</button>
        
    </div>
    </>
)
}

