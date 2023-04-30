import React from 'react';

const Album = ({item}) => {
    return (
        <div>
            {item.id}
            {item.title}
            <hr/>
        </div>
    );
};

export default Album;