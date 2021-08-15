import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';


function App() {
  const [products,setProducts] = useState([]);
  const [state, setState] = React.useState({
    hview: false,
  });
  useEffect(() => {
    fetch("https://wawinner.its.ae/dev/public/api/v1/front-end/campaign")
      .then(res => res.json())
      .then(
        (result) => {
          setProducts(result.data);
        }
      )
  }, [])

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  
  return (
    <div className="App">
      <header className="App-header w-full text-center">
        <FormControlLabel
        control={<Checkbox checked={state.hview} onChange={handleChange} name="hview" className="hview" />}
        label="Horizontal"
        />
        {products.map(item => (
          state.hview ?  
        <div className="pb-2 w-4/5 rounded-lg shadow-lg bg-white mt-32 pt-0.5 pl-12 pr-12">
          <div key={item.id} className="flex pt-2 pb-2 pl-18 pr-18 w-full mx-auto rounded-lg shadow-lg bg-white mt-20 mb-32 normal-bg">
            <div className="pb-2 w-full mx-auto normal-bg pl-8 pr-8">
              <div className="flex">
                <div className="pb-2 w-full mx-auto rounded-lg shadow-lg bg-white mt-20 mb-32">
                  
                  <div className="flex justify-center bg-transparent">
                  
                    <div className="p-8 text-center -mt-28 flex-col bg-transparent rounded-full ">
                      <div style={{width:200}}>
                        <CircularProgressbarWithChildren  
                        value={parseInt(item.quantity_sold)/parseInt(item.product_quantity)*100} 
                        styles={buildStyles({
                          pathColor: "#801aae",
                          trailColor: "#e4cdea"
                        })}
                        strokeWidth={5}
                        >
                        <div className=" px-12 py-4 text-center bg-white shadow-xl flex-col border-2 rounded-full">
                            <div className="text-3xl text-purple-700 font-bold">{item.quantity_sold}</div>
                            <div className="text-sm text-gray-700 font-semibold">SOLD</div>
                            <div className="text-sm text-gray-400">out of</div>
                            <div className="text-sm text-gray-400">{item.product_quantity}</div>
                        </div>
                        </CircularProgressbarWithChildren>
                      </div>
                    </div>
                  </div>
                          
                  <div className="flex justify-between mb-12" style={{marginTop:'-125px'}}>
                    <div className="bg-purple-custom px-10 text-white py-2">
                        AED {item.product_price}
                    </div>
                  </div>

                  <div className="w-full flex">
                  <div className="w-full flex ">
                  <div className="w-full flex flex-wrap">

                    <div className="pb-2 max-w-sm mx-auto bg-white mt-16">
                      <div className=" mb-5">
                        <img alt="" className="h-48 w-full object-cover" src={item.product_id.image} />
                      </div>
                      <div className="text-center text-gray-900 font-semibold">
                          buy a
                      </div>
                      <div className="text-center text-gray-900 font-semibold mb-2">
                          {item.product_id.name}
                      </div>
                      <div className="text-center text-gray-900 font-semibold mb-2 mr-8 ml-8">
                          {item.product_id.description}
                      </div>
                    </div>

                    <div className="pb-2 max-w-sm mx-auto bg-white mt-16">
                      <div className=" mb-5">
                          <img alt="" className="h-48 w-full object-cover" src={item.prize_id.image} />
                      </div>
                      <div className="text-center mb-5">
                        <h1><strong>Get chance to win:</strong></h1>
                        <h2><strong>{item.prize_id.name}</strong></h2>
                        <p>{item.prize_id.description}</p>
                      </div>
                    </div>
                    </div>

                    <div className="mr-4 pt-32 bg-white">
                        <div className="bg-purple-secondary rounded-lg w-8 h-8 mr-2 mb-8 p-1.5 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="bg-purple-custom rounded-lg w-8 h-8 mr-2 p-1.5 text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          </svg>
                        </div>
                    </div>
                    </div>
                    <div className="h-52 buttonsPMDiv text-white">
                      <div className="bg-purple-secondary w-10 h-32 buttonsPMDivTop text-white pt-10">
                        
                        <button className="rounded-full h-8 w-8 text-2xl flex items-center justify-center text-white bg-purple-custom ml-4 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>

                      </div>
                      <div className="bg-purple-secondary w-10 h-4 buttonsPMDivMiddle text-white">
                        1
                      </div>
                      <div className="bg-purple-secondary w-10 h-32 buttonsPMDivBottom text-white pt-12">
                        
                        <button className="rounded-full h-8 w-8 text-2xl flex items-center justify-center text-white bg-purple-custom ml-4 mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                        </button>

                      </div>
                      </div>

                  </div>
                </div>

              </div>
              
            </div>
            
            

          </div>
          </div>
          :
          <div className="pb-2 w-500 rounded-lg shadow-lg bg-white mt-32 pt-0.5 pl-12 pr-12">
          <div className="pb-2 w-full mx-auto rounded-lg shadow-lg bg-white mt-20 mb-32">
            <div className="flex justify-center bg-transparent">
              <div className="text-center shadow-xl -mt-16 flex-col bg-transparent rounded-full ">
                <div style={{width:200}}>
                  <CircularProgressbarWithChildren  
                  value={parseInt(item.quantity_sold)/parseInt(item.product_quantity)*100} 
                  styles={buildStyles({
                    pathColor: "#801aae",
                    trailColor: "#e4cdea"
                  })}
                  strokeWidth={5}
                  >
                        <div className=" px-12 py-4 text-center bg-white shadow-xl flex-col border-2 rounded-full ">
                            <div className="text-3xl text-purple-700 font-bold">{item.quantity_sold}</div>
                            <div className="text-sm text-gray-700 font-semibold">SOLD</div>
                            <div className="text-sm text-gray-400">out of</div>
                            <div className="text-sm text-gray-400">{item.product_quantity}</div>
                        </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>

          

            <div className="flex justify-between mb-12">
                <div className="bg-purple-custom px-10 text-white py-2">
                    AED {item.product_price}
                </div>
                <div className="flex mr-3">
                    <div className="bg-purple-custom rounded-lg w-8 h-8 mr-2 p-1.5 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="bg-purple-secondary rounded-lg w-8 h-8 mr-2 p-1.5 text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </div>
                </div>
            </div>
            <div className=" mb-5">
                <img alt="" className="h-48 w-full object-cover" src={item.product_id.image} />
            </div>
            <div className="text-center text-gray-900 font-semibold">
                buy a
            </div>
            <div className="text-center text-gray-900 font-semibold mb-2">
                {item.product_id.name}
            </div>
            <div className="text-center text-gray-900 font-semibold mb-2 mr-8 ml-8">
                {item.product_id.description}
            </div>
            <div className="w-full flex justify-center">
                <button className="rounded-full h-8 w-8 text-2xl flex items-center justify-center text-white bg-purple-custom ml-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                </button>

                <h5> <strong>1</strong> </h5>

                <button className="rounded-full h-8 w-8 text-2xl flex items-center justify-center text-white bg-purple-custom ml-4 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                </svg>
                </button>
            </div>
            <div className="w-full flex justify-center mt-4">
              <div className="flex justify-center w-36">
                <button className="w-full rounded-full pl-2 pr-2 pt-1 pb-1 text-xs text-center items-center justify-center text-white bg-purple-custom ml-4 mr-4">
                  Show your cart
                </button>
              </div>
            </div>
            <div className="pb-2 max-w-sm mx-auto bg-white mt-16">
              <div className=" mb-5">
                  <img alt="" className="h-48 w-full object-cover" src={item.prize_id.image} />
              </div>
              <div className="text-center mb-5">
                <h1><strong>Get chance to win:</strong></h1>
                <h2><strong>{item.prize_id.name}</strong></h2>
                <p>{item.prize_id.description}</p>
              </div>
            </div>
          </div>
      </div>
        )
        )}
      </header>
      
      

    </div>
  );
}

export default App;
