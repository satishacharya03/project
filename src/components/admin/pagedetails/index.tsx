import React, { useEffect, useState } from 'react';
import { usePage } from '../../../hooks/usePage';
import { Page } from '../../../types';

const PageDetails: React.FC = () => {
    const { getPageDetails } = usePage();
    const [pageDetails, setPageDetails] = useState<Page | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const details = await getPageDetails();
            setPageDetails(details);
        };
        fetchDetails();
    }, [getPageDetails]);

    if (!pageDetails) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="page-details-container">
            <h1>Page Details</h1>
            <div className="details-card">
                <p><strong>Name:</strong> {pageDetails.name}</p>
                <p><strong>Phone:</strong> {pageDetails.phone}</p>
                <p><strong>Email:</strong> {pageDetails.email}</p>
                <p><strong>Message:</strong> {pageDetails.message}</p>
                {/* Display other fields as necessary */}
            </div>
        </div>
    );
};

export default PageDetails;
