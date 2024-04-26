import React, { useState } from 'react'

export default function Aboutus() {
    const[btntext,setbtntext]=useState("Enable dark mode")
     const [darkstyle,setDark]=useState(
        {
            color:'#141212c9',
            backgroundColor:'white'
         }
     )
    
  const togglemode=()=>{
   if(darkstyle.color==='#141212c9'){
    setDark(
        {
            color:'white',
            backgroundColor:'#141212c9',
            border:'1px solid grey'
         })

         setbtntext('Enable light mode')
    

   }
   else{
    setDark(
        {
            color:'#141212c9',
            backgroundColor:'white'
         }
    )
    setbtntext('Enable dark mode')
   }
  }
    return (
        <>
        <div className="container" style={darkstyle}>
            <h2 className='my-3'>About the website</h2>
        </div>
            <div className="container" style={darkstyle}>
                <div className="accordion" id="accordionExample" style={darkstyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" style={darkstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Accordion Item #1 first
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={darkstyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={darkstyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={darkstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={darkstyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={darkstyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={darkstyle}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" style={darkstyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" style={darkstyle} data-bs-parent="#accordionExample">
                            <div className="accordion-body"style={darkstyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={togglemode} type="button" className="btn btn-warning my-3" ><i className="fa-solid fa-moon"></i>{btntext}</button>
            </div>
        </>
    )
}
