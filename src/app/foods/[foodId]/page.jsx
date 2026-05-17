import React from 'react';

const FoodDetailPage = async({params}) => {

    const {foodId} = await params;
    return (
        <div>
            <h2>Show food detail: {foodId}</h2>
        </div>
    );
};

export default FoodDetailPage;