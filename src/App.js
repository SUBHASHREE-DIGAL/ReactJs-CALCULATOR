import React,{useState} from 'react';


function App() {
  const[cal,setCal]=useState('');

  const backSpace=()=>{
    try{
      setCal(cal.slice(0,-1))
      
    }
catch{
setCal('')
}
  }

const calculate=()=>{
  try{
    setCal(eval(cal))
  }catch(error){

  }

}

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-6 fw-bolder text-center p-4'>DIGITAL CALCULATOR</h1>
        </div>
      </div>
      <hr/>
      <div className='row'>
        <div className='col-12 '>
              <div className='card bg-success shadow-lg border-0 text-white' style={{width:'18rem',margin:'auto'}}>
                  <div className='card-body'>
                       <input type='text' value={cal}className='form-control mb-4 text-center fs-4 bg-light shadow-lg text-primary '/>
                        <div className='row my-2 mx-2'>
                          <div className='col-3 '>
                                <button value='1' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5  text-white shadow p-3'>1</button>
                          </div>
                          <div className='col-3'>
                                <button value='2' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3 '>2</button>
                          </div>
                          <div className='col-3'>
                                <button value='3' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3 '>3</button>
                          </div>
                          <div className='col-3'>
                                <button value='*' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3 '>*</button>
                          </div>
                        </div>
                        <div className='row my-2 mx-2'>
                          <div className='col-3'>
                                <button value='4' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5  text-white shadow p-3 '>4</button>
                          </div>
                          <div className='col-3'>
                                <button value='5' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>5</button>
                          </div>
                          <div className='col-3'>
                                <button value='6' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>6</button>
                          </div>
                          <div className='col-3'>
                                <button value='+' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>+</button>
                          </div>
                        </div>
                        <div className='row my-2 mx-2'>
                          <div className='col-3'>
                                <button value='7' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5  text-white shadow p-3'>7</button>
                          </div>
                          <div className='col-3'>
                                <button value='8' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>8</button>
                          </div>
                          <div className='col-3'>
                                <button value='9' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>9</button>
                          </div>
                          <div className='col-3'>
                                <button value='-' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>-</button>
                          </div>
                        </div>
                        <div className='row my-2 mx-2'>
                          <div className='col-3'>
                                <button value='0' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5  text-white shadow p-3 '>0</button>
                          </div>
                          <div className='col-3'>
                                <button value='.' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3'>.</button>
                          </div>
                          <div className='col-3'>
                                <button value='=' onClick={()=>calculate()} className='btn btn-lg bg-success fs-5 text-white shadow p-3 '>=</button>
                          </div>
                          <div className='col-3'>
                                <button value='/' onClick={(e)=>setCal(cal+e.target.value)} className='btn btn-lg bg-success fs-5 text-white shadow p-3 '>/</button>
                          </div>
                        </div>
                        <div className='row'>
                         
                          <button value='Clear' onClick={()=>backSpace()} className='btn  btn-sm bg-danger fs-5 text-white shadow p-3 '>Clear</button>
                         
                        </div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  )
}

export default App;
