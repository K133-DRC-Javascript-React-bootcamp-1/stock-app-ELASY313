
import React, {useState} from 'react';
import  './App.css';

function App() {
   
   const [arrData, setArrData] = useState([
    {
      
      "medicin":"Minamol",
      "stock":20,
      
    },
    {
      
      "medicin":"Dolorex",
      "stock":30,
      

    },
    {
      
      "medicin":"Aferin",
      "stock":40,
      
    },
    {
    
    "medicin":"Sitamol",
    "stock":35,
    
    },
    {
    
      "medicin":"Hametan",
      "stock":13,
      
    },
    {
      
      "medicin":"Resperdal",
      "stock":13,
      

    },
    
   ])

  function onChangeHandle(e){ 
    console.log("e.target.value", e.target.value);
    if(e.target.value === '') {
      window.location.reload(true)
      const tempArr = arrData;
      setArrData(tempArr)
      return
    }
    const searchResult =  arrData.filter(item => item.medicin.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.medicin.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setArrData(searchResult);
  }

  return (
    <div className="App">
      {
        console.log("arrData", arrData)
      }
        <input type="text" onChange={onChangeHandle} style={{marginTop:"30px", width:430,height:40}}/>
        <div>
          <table style={{border:"3px solid #000", marginLeft:"20px",width:400}}>
           <tr style={{border:"3px solid #000"}}>
             <th>medicin</th>
             <th>stock</th>
             
           </tr>

              {
                arrData.map(item => {
                  return(
                    <tr>
                      <td style={{border:"1px solid #000"}}>{item.medicin}</td>
                      <td style={{border:"1px solid #000"}}>{item.stock}</td>
                    </tr>
                  )
                })
              }
           
          </table>
        </div>
  
        
        
    </div>
    
    
  );
  
} 


export default App