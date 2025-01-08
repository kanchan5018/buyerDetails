import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addBuyers } from '../redux/action';
import './pages.css';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();

const AddBuyerPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, trigger } = useForm();
    const [step, setStep] = useState(1);
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(addBuyers(data));
        toast.success('Buyer added successfully!', {
            position: 'top-right',
        });
        navigate('/');
    };

    const nextStep = async () => {
        // Trigger validation for the fields on the current step
        const isValid = await trigger();
    
        if (isValid) {
            setStep(step + 1);
        } else {
            toast.error('Please fill out all required fields correctly.', {
                position: 'top-right', // Use 'top-right' instead of toast.POSITION.TOP_RIGHT
            });
        }
    };    

    const prevStep = () => setStep(step - 1);

    return (
        <div id="root">
         <ToastContainer />
            <section className="bg-home bg-circle-gradiant d-flex align-items-center">
                <div className="bg-overlay bg-overlay-white"></div>
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-8 col-lg-5">
                            <div className="shadow rounded border-0 card">
                                <div className="card-body">
                                    <h4 className="card-title text-center addbuyer">Add Buyer</h4>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                        {step === 1 && (
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <input
                                                            {...register('name', { required: 'Name is required' })}
                                                            placeholder="Name"
                                                            className={`form-control mb-3 ${errors.name ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.name && <span className="invalid-feedback">{errors.name.message}</span>}

                                                        <input
                                                            {...register('email', {
                                                                required: 'Email is required',
                                                                pattern: {
                                                                    value: /^\S+@\S+\.\S+$/i, // Improved email pattern
                                                                    message: 'Email is not valid'
                                                                }
                                                            })}
                                                            placeholder="Email"
                                                            className={`form-control mb-3 ${errors.email ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.email && <span className="invalid-feedback">{errors.email.message}</span>}

                                                        <input
                                                            {...register('mobile', { 
                                                                required: 'Mobile is required',
                                                                pattern: {
                                                                    value: /^[0-9]{10}$/,  // Mobile number should be 10 digits
                                                                    message: 'Mobile number must be 10 digits'
                                                                }
                                                            })}
                                                            placeholder="Mobile"
                                                            className={`form-control mb-3 ${errors.mobile ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.mobile && <span className="invalid-feedback">{errors.mobile.message}</span>}

                                                        <input
                                                            {...register('address', { required: 'Address is required' })}
                                                            placeholder="Address"
                                                            className={`form-control mb-3 ${errors.address ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.address && <span className="invalid-feedback">{errors.address.message}</span>}

                                                        <input
                                                            {...register('buyingType', { required: 'Buying Type is required' })}
                                                            placeholder="Buying Type"
                                                            className={`form-control mb-3 ${errors.buyingType ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.buyingType && <span className="invalid-feedback">{errors.buyingType.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
                                                </div>
                                            </div>
                                        )}

                                        {step === 2 && (
                                            <div>
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <h5 className="mt-3">Diamond Purchase Details</h5>
                                                        <select
                                                            {...register('diamondType', { required: 'Diamond Type is required' })}
                                                            className={`form-control mb-3 ${errors.diamondType ? 'is-invalid' : ''}`}
                                                        >
                                                            <option value="">Select Diamond Type</option>
                                                            <option value="Natural">Natural</option>
                                                            <option value="Synthetic">Synthetic</option>
                                                        </select>
                                                        {errors.diamondType && <span className="invalid-feedback">{errors.diamondType.message}</span>}

                                                        <select
                                                            {...register('shape', { required: 'Shape is required' })}
                                                            className={`form-control mb-3 ${errors.shape ? 'is-invalid' : ''}`}
                                                        >
                                                            <option value="">Select Shape</option>
                                                            <option value="Round">Round</option>
                                                            <option value="Princess">Princess</option>
                                                            <option value="Oval">Oval</option>
                                                            <option value="Emerald">Emerald</option>
                                                            <option value="Cushion">Cushion</option>
                                                        </select>
                                                        {errors.shape && <span className="invalid-feedback">{errors.shape.message}</span>}

                                                        <input
                                                            {...register('caratWeight', { 
                                                                required: 'Carat Weight is required',
                                                                pattern: {
                                                                    value: /^[0-9]+(\.[0-9]{1,2})?$/,  // Carat weight can have decimals
                                                                    message: 'Carat Weight must be a valid number'
                                                                }
                                                            })}
                                                            placeholder="Carat Weight"
                                                            className={`form-control mb-3 ${errors.caratWeight ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.caratWeight && <span className="invalid-feedback">{errors.caratWeight.message}</span>}

                                                        <input
                                                            {...register('colorGrade', { required: 'Color Grade is required' })}
                                                            placeholder="Color Grade"
                                                            className={`form-control mb-3 ${errors.colorGrade ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.colorGrade && <span className="invalid-feedback">{errors.colorGrade.message}</span>}

                                                        <input
                                                            {...register('clarityGrade', { required: 'Clarity Grade is required' })}
                                                            placeholder="Clarity Grade"
                                                            className={`form-control mb-3 ${errors.clarityGrade ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.clarityGrade && <span className="invalid-feedback">{errors.clarityGrade.message}</span>}

                                                        <input
                                                            {...register('cutGrade', { required: 'Cut Grade is required' })}
                                                            placeholder="Cut Grade"
                                                            className={`form-control mb-3 ${errors.cutGrade ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.cutGrade && <span className="invalid-feedback">{errors.cutGrade.message}</span>}

                                                        <input
                                                            {...register('currentPrice', { 
                                                                required: 'Current Price is required',
                                                                pattern: {
                                                                    value: /^[0-9]+(\.[0-9]{1,2})?$/,  // Price can have decimals
                                                                    message: 'Current Price must be a valid number'
                                                                }
                                                            })}
                                                            placeholder="Current Price"
                                                            className={`form-control mb-3 ${errors.currentPrice ? 'is-invalid' : ''}`}
                                                        />
                                                        {errors.currentPrice && <span className="invalid-feedback">{errors.currentPrice.message}</span>}
                                                    </div>
                                                </div>
                                                <div className="d-flex justify-content-between">
                                                    <button type="button" className="btn btn-secondary" onClick={prevStep}>Back</button>
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddBuyerPage;
