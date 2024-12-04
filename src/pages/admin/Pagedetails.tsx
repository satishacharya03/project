import React from 'react';
import PageDetails from '../../components/admin/pagedetails';
import PageUpdate from '../../components/admin/pagedetails/pageupdate';

const PageDetailsPage: React.FC = () => {

    return (
        <div>
            <PageDetails />
            <PageUpdate />
        </div>
    );
};

export { PageDetailsPage };
