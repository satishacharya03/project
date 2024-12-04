import { useState } from 'react';
import { Page } from '../types';

const usePage = () => {
    const [pageDetails, setPageDetails] = useState<Page | null>(null);

    const getPageDetails = async () => {
        // Fetch page details from an API or data source
        const response = await fetch('/api/page-details'); // Adjust the API endpoint as needed
        const data: Page = await response.json();
        setPageDetails(data);
        return data;
    };

    const updatePageDetails = async (updatedDetails: Page) => {
        // Update page details via an API or data source
        await fetch('/api/page-details', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedDetails),
        });
        setPageDetails(updatedDetails);
    };

    return { getPageDetails, updatePageDetails, pageDetails };
};

export { usePage };
