import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from "react-router-dom";

const AddressDetail = () => {
    const { store, actions } = useContext(Context);
    const { address_id } = useParams();
    const [addressDetail, setAddressDetail] = useState(null);

    useEffect(() => {
        const address = store.addresses.find(addr => addr.id === parseInt(address_id));
        if (address) {
            setAddressDetail(address);
        }
    }, [store.addresses, address_id]);

    if (!addressDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Address Detail</h2>
            <div><strong>Address:</strong> {addressDetail.address}</div>
            <div><strong>Latitude:</strong> {addressDetail.latitude}</div>
            <div><strong>Longitude:</strong> {addressDetail.longitude}</div>
            <Link to="/">
                <button className="btn btn-primary mt-3">Back to Addresses</button>
            </Link>
        </div>
    );
};

export default AddressDetail;
