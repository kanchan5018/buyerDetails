import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addBuyers } from '../redux/action';
import './pages.css';

const AddBuyerPage = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('data', data)
        dispatch(addBuyers(data));
    };

    return (
        <div id="root">
            <div className="back-to-home">
                <a className="back-button btn btn-icon btn-primary" href="/">
                    <i>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left icons">
                            <g>
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </g>
                        </svg>
                    </i>
                </a>
            </div>
            <section className="bg-home bg-circle-gradient d-flex align-items-center">
                <div className="bg-overlay bg-overlay-white"></div>
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-8 col-lg-5">
                            <div className="shadow rounded border-0 card">
                                <div className="card-body">
                                    <h4 className="card-title text-center addbuyer">Add Buyer</h4>
                                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <input 
                                                    {...register('name', { required: 'Name is required' })} 
                                                    placeholder="Name" 
                                                    className={`form-control mb-3 ${errors.name ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}

                                                <input 
                                                    {...register('email', { 
                                                        required: 'Email is required', 
                                                        pattern: {
                                                            value: /^\S+@\S+$/i,
                                                            message: 'Email is not valid'
                                                        }
                                                    })} 
                                                    placeholder="Email" 
                                                    className={`form-control mb-3 ${errors.email ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}

                                                <input 
                                                    {...register('mobile', { required: 'Mobile is required' })} 
                                                    placeholder="Mobile" 
                                                    className={`form-control mb-3 ${errors.mobile ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.mobile && <div className="invalid-feedback">{errors.mobile.message}</div>}

                                                <input 
                                                    {...register('address', { required: 'Address is required' })} 
                                                    placeholder="Address" 
                                                    className={`form-control mb-3 ${errors.address ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}

                                                <input 
                                                    {...register('buyingType', { required: 'Buying Type is required' })} 
                                                    placeholder="Buying Type" 
                                                    className={`form-control mb-3 ${errors.buyingType ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.buyingType && <div className="invalid-feedback">{errors.buyingType.message}</div>}

                                                <input 
                                                    {...register('diamondPurchaseDetails', { required: 'Diamond Purchase Details are required' })} 
                                                    placeholder="Diamond Purchase Details" 
                                                    className={`form-control mb-3 ${errors.diamondPurchaseDetails ? 'is-invalid' : ''}`} 
                                                />
                                                {errors.diamondPurchaseDetails && <div className="invalid-feedback">{errors.diamondPurchaseDetails.message}</div>}
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="d-grid">
                                                    <button type="submit" className="btn btn-primary">Add Buyer</button>
                                                </div>
                                            </div>
                                        </div>
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
