import React from "react";
import Data from "./Data";

const Input = () => {

    const [text1, setTextOne] = React.useState('text1');
    const [text2, setTextTWo] = React.useState('text2');
    const [img, setImg] = React.useState(Data[0].img)

    const handelTextOneChange = (e) => {
        setTextOne(e.target.value);
    }

    const handelTextTwoChange = (e) => {
        setTextTWo(e.target.value);
    }

    const handelMemeChange = () => {

        const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min ;
        let randomNumber = getRandomInteger(0, Data.length-1); 
        setImg( Data[ randomNumber ].img );
    }


    return(
        <div>
            <div class="input-group">
                <input type="text" onChange={handelTextOneChange} aria-label="First name" class="form-control" placeholder="text1" />
                <input type="text" onChange={handelTextTwoChange} aria-label="Last name" class="form-control" placeholder="text2" />
            </div>
            <div className="bttn">
                <button onClick={handelMemeChange} >Get a new meme image  🖼</button>
            </div>
            <div className="meme">
                <img src={ img } alt="meme img" id={ Data[0].id } />
                <h1 className="text1">{text1}</h1>
                <h1 className="text2">{text2}</h1>
            </div>
        </div>
    );
}

export default Input;