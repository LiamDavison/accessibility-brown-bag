import React from "react";


const JestAxe:React.FC = () => {
    return (
        <div>
        <div className={"bg-gray-300 m-10 flex flex-col text-center"} >

            <p className={"font-black text-3xl font-bold"}>This is my marvelous form, and this is my main heading!</p>
            <p>Here is some random subheading</p>

            <img  className={"w-52 self-center"} src={"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*"}/>
            <h5>If it looks like a duck, swims like a duck, and quacks like a duck, then it probably is a duck.</h5>


            {displayDuck()}

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


const displayDuck = () => {
    return (
        <svg className={"w-20 self-center"} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
             viewBox="0 0 512 512"  >
            <g>
                <g>
                    <path d="M501.422,113.75h-90.217c-0.464-20.826-8.767-40.338-23.541-55.112c-15.207-15.22-35.439-23.603-56.968-23.603
			c-44.418,0-80.555,36.137-80.555,80.555v92.308H148.702H10.579C4.736,207.899,0,212.635,0,218.478
			c0,20.377,7.934,39.534,22.344,53.945c14.417,14.405,33.577,22.338,53.948,22.338h6.292
			c11.217,30.749,31.562,58.188,57.911,77.883c26.609,19.889,57.796,31.301,90.76,33.312v60.431c0,5.843,4.736,10.579,10.578,10.579
			h44.483c5.843,0,10.578-4.736,10.578-10.579s-4.736-10.578-10.578-10.578h-33.904v-49.864
			c41.27-2.526,79.721-19.794,109.214-49.286c32-32,49.623-74.547,49.623-119.803V218.48v-27.515h34.106
			c36.748,0,66.645-29.892,66.645-66.634C512,118.486,507.264,113.75,501.422,113.75z M76.292,273.601v0.001
			c-14.724,0-28.573-5.735-38.991-16.144c-7.872-7.873-13.07-17.707-15.137-28.403H72.41v7.796c0,12.435,1.35,24.744,4.008,36.75
			H76.292z M390.093,218.476v18.376c0,39.605-15.422,76.839-43.426,104.843c-28.003,28.003-65.233,43.426-104.832,43.426
			c-65.285,0-122.18-41.833-141.576-104.103c-4.44-14.226-6.692-29.086-6.692-44.165v-7.796h45.092
			c5.317,52.231,49.56,93.123,103.176,93.123c26.567,0,51.834-10.032,71.145-28.247c4.25-4.009,4.446-10.704,0.438-14.954
			c-4.01-4.25-10.704-4.446-14.954-0.438c-15.371,14.497-35.481,22.48-56.629,22.48c-41.937,0-76.671-31.429-81.88-71.966h100.762
			c5.842,0,10.578-4.736,10.578-10.578V115.59c0-32.752,26.645-59.398,59.398-59.398c15.875,0,30.792,6.179,42.006,17.403
			c11.215,11.216,17.392,26.13,17.392,41.996V218.476z M445.355,169.806H411.25v-34.898h78.351
			C484.818,154.899,466.796,169.806,445.355,169.806z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M347.06,106.028c-5.843,0-10.578,4.736-10.578,10.578v15.434c0,5.843,4.736,10.578,10.578,10.578
			s10.578-4.736,10.578-10.578v-15.434C357.638,110.764,352.902,106.028,347.06,106.028z"/>
                </g>
            </g>
            <g>
                <g>
                    <path d="M329.73,251.107c-5.211-2.64-11.577-0.555-14.216,4.656c-0.368,0.727-0.747,1.445-1.135,2.159
			c-2.794,5.132-0.9,11.555,4.231,14.35c1.607,0.875,3.341,1.291,5.05,1.291c3.749,0,7.381-1.997,9.3-5.521
			c0.489-0.897,0.965-1.803,1.428-2.716C337.026,260.113,334.942,253.747,329.73,251.107z"/>
                </g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
            <g>
            </g>
        </svg>

    )
}

export default JestAxe;


