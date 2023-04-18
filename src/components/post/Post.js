import React from 'react';

const Post = ({value, variable}) => {
    return (
        <div>
            {
                <p>
                id - {value.id}  <br/>
                title - {value.title} <br/>
                    <button onClick={() => {
                        variable(value);
                    }}>details</button>
                </p>
            }
            
        </div>
    );
};

export default Post;