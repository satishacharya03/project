import React, { useEffect, useState } from 'react';
import { usePage } from '../../../hooks/usePage';
import { Page } from '../../../types';

const PageUpdate: React.FC = () => {
    const { getPageDetails, updatePageDetails } = usePage();
    const [pageDetails, setPageDetails] = useState<Page | null>(null);

    useEffect(() => {
        const fetchDetails = async () => {
            const details = await getPageDetails();
            setPageDetails(details);
        };
        fetchDetails();
    }, [getPageDetails]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (pageDetails) {
            setPageDetails({ ...pageDetails, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (pageDetails) {
            await updatePageDetails(pageDetails);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* ... existing form fields ... */}
            <input type="text" name="name" value={pageDetails?.name} onChange={handleChange} />
            <input type="text" name="phone" value={pageDetails?.phone} onChange={handleChange} />
            <input type="email" name="email" value={pageDetails?.email} onChange={handleChange} />
            <textarea name="message" value={pageDetails?.message} onChange={handleChange} />
            {/* ... other fields ... */}
            <button type="submit">Update</button>
        </form>
    );
};

export default PageUpdate;
