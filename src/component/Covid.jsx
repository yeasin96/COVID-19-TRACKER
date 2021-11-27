
import React ,{ useEffect, useState } from "react"
import './index.css'
function Covid(){
    const [data,setdata]=useState([])
    async function getdata(){
        try{
            const res=await fetch('https://data.covid19india.org/data.json')
            const val= await res.json()

            // console.log(val);
            // console.log(val.statewise[0]);
            setdata(val.statewise[0])
            console.log(val.statewise[0])
        }
        catch (err){
            console.log(err);

        }
    }
   
    useEffect(()=>{
        
        getdata()
       
    },[])
    return(
        <>
        <h1> <span style={{color:"red"}}>🔴</span> Live</h1>
        <h2>COVID-19 TRACKER</h2>
        <br/><br/>
        <ul>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>Name Of <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>COUNTRY</span></p>
            <br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> INDIA</p>
                </div>
            </div>
            </li>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>Total <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>RECOVERD</span></p>
                <br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> {data.recovered}</p>
                </div>
            </div>
            </li>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>Total <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>CONFIRMED</span></p>
                {/* <p>{data.confirmed}</p> */}<br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> {data.confirmed}</p>
                </div>
            </div>
            </li>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>total <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>DEATHS</span></p>
                {/* <p>{data.deaths}</p> */}<br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> {data.deaths}</p>
                </div>
            </div>
            </li>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>total <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>ACTIVE CASE</span></p>
                {/* <p>{data.active}</p> */}<br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> {data.active}</p>
                </div>
            </div>
            </li>
        <li style={{backgroundColor:"violet",textAlign:"center"}}>
            <div>
                <div>
                <p style={{color:"white"}}>last <span style={{fontSize:"25px",fontWeight:"bold" ,color:"white"}}>UPDATE</span></p>
                {/* <p>{data.lastupdatedtime}</p> */}
                <br/>
                <p style={{fontSize:"32px",fontWeight:"bold"}}> {data.lastupdatedtime}</p>
                </div>
            </div>
            </li>
        
        </ul>
        
        

      
        </>
    )
}
export default Covid