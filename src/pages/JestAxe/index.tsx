import React from "react";


const JestAxe:React.FC = () => {
    return (
        <div>
        <div className={"bg-gray-300 m-10 flex flex-col text-center"} >

            <p className={"font-black text-3xl font-bold"}>This is my marvelous form, and this is my main heading!</p>
            <p>Here is some random subheading</p>

            <img  className={"w-52 self-center"} src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*"}/>
            <h5>If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.</h5>

            <button className={"underline"} onClick={() => {
                window.location.href = "https://unsplash.com/s/photos/ducks"
            }}> Look at some more ducks here </button>


            <form className={"flex flex-col p-10"} onSubmit={() => alert("form submitted")} >
                <input  className={"w-1/2 self-center m-2"} type={"text"}/>
                <button className={"bg-gray-500"} type={"submit"} >Submit</button>
            </form>

        </div>
        </div>
    )

}

export default JestAxe