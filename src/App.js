import './App.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import { useForm } from 'react-hook-form';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  const { register, formState: { errors }, handleSubmit } = useForm()
  const onSubmitPersonal = data => {

    const url = 'http://localhost:5000/review';
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        toast('Save Your Data')

      })

  }
  return (
    <div className="container d-flex justify-content-center mt-5 ">
      <div class="card w-75">
  <div class="card-body">
          <Tabs>
            <TabList>
              <Tab>Personal Details</Tab>
              <Tab>Business Details</Tab>
              <Tab>Loan Application Details</Tab>
            </TabList>

            <TabPanel>
             <div className='mt-5'>
                <h2 >Personal Details</h2>
                <form onSubmit={handleSubmit(onSubmitPersonal)}>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example17"
                      placeholder='First Name'
                      class="form-control form-control-lg mt-3"
                      {...register("First-Name", {
                        required: {
                          value: true,
                          message: 'First Name is Required'
                        },
                        pattern: {
                         
                          message: 'Provide a valid Name'
                        }
                      })}

                    />
                    <label className="label mt-2">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example17"
                      placeholder='Last Name'
                      class="form-control form-control-lg"
                      {...register("Last-Name", {
                        required: {
                          value: true,
                          message: 'Last Name is Required'
                        },
                        pattern: {
                         
                          message: 'Provide a valid Name'
                        }
                      })}

                    />
                    <label className="label mt-2">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      placeholder='Enter Your Age'
                      id="form2Example27"
                      class="form-control form-control-lg"

                      {...register("age", {
                        required: {
                          value: true,
                          message: 'Age is Required'
                        },
                        minLength: {
                         
                          message: 'Enter a valid Age'
                        }
                      })}
                    />
                    <label className="label mt-2">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      placeholder='Enter Your Mobile Number'
                      id="form2Example27"
                      class="form-control form-control-lg"

                      {...register("number", {
                        required: {
                          value: true,
                          message: 'Number is Required'
                        },
                        minLength: {
                         
                          message: 'Enter a valid Number'
                        }
                      })}
                    />
                    <label className="label mt-2">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                    </label>
                  </div>
         
                  <div class="pt-1 d-grid mb-4">
                    <button class="btn btn-outline-dark btn-lg " value='save' type="submit">Save</button>

                  </div>


        
                </form>
             </div>
            </TabPanel>
            <TabPanel>
              <div className='mt-5'>
                <h2>Business Details</h2>
                <form onSubmit={handleSubmit(onSubmitPersonal)}>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example17"
                      placeholder='First Name'
                      class="form-control form-control-lg mt-3"
                      {...register("First-Name", {
                        required: {
                          value: true,
                          message: 'First Name is Required'
                        },
                        pattern: {

                          message: 'Provide a valid Name'
                        }
                      })}

                    />
                    <label className="label mt-2">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="text"
                      id="form2Example17"
                      placeholder='Last Name'
                      class="form-control form-control-lg"
                      {...register("Last-Name", {
                        required: {
                          value: true,
                          message: 'Last Name is Required'
                        },
                        pattern: {

                          message: 'Provide a valid Name'
                        }
                      })}

                    />
                    <label className="label mt-2">
                      {errors.email?.type === 'required' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                      {errors.email?.type === 'pattern' && <span className="label-text-alt text-danger mt-2">{errors.email.message}</span>}
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      placeholder='Enter Your Age'
                      id="form2Example27"
                      class="form-control form-control-lg"

                      {...register("age", {
                        required: {
                          value: true,
                          message: 'Age is Required'
                        },
                        minLength: {

                          message: 'Enter a valid Age'
                        }
                      })}
                    />
                    <label className="label mt-2">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                    </label>
                  </div>
                  <div class="form-outline mb-4">
                    <input
                      type="number"
                      placeholder='Enter Your Mobile Number'
                      id="form2Example27"
                      class="form-control form-control-lg"

                      {...register("number", {
                        required: {
                          value: true,
                          message: 'Number is Required'
                        },
                        minLength: {

                          message: 'Enter a valid Number'
                        }
                      })}
                    />
                    <label className="label mt-2">
                      {errors.password?.type === 'required' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                      {errors.password?.type === 'minLength' && <span className="label-text-alt text-danger">{errors.password.message}</span>}
                    </label>
                  </div>

                  <div class="pt-1 d-grid mb-4">
                    <button class="btn btn-outline-dark btn-lg " value='save' type="submit">Save</button>

                  </div>



                </form>
              </div>
            </TabPanel>
            <TabPanel>
              <div className='mt-5'>
                <h2>Loan Application Details</h2>
              </div>
            </TabPanel>
          </Tabs>
  </div>
</div>
      <ToastContainer />
    </div>
   
  );
}

export default App;
