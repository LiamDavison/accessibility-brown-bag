import React from "react";


const JestAxe:React.FC = () => {
    return (
        <div className={"w-52 h-52 bg-gray-300 m-10"} >


            <form className={"flex flex-col p-10"} onSubmit={() => alert("form submitted")} >

                <input type={"text"}/>
                <button className={"bg-gray-500"} type={"submit"} >Submit</button>
            </form>

        </div>
    )

}

export default JestAxe