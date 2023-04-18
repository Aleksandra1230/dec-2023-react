import React from 'react';



const Space = ({value}) => {


    return (
        <div className={'box'}>
            <h4>flight_number: {value.flight_number}</h4>
            <h5>mission_name: {value.mission_name} <br/>
            mission_id: {value.mission_id} <br/>
            reused: {value.reused} <br/>
            launch_year: {value.launch_year} <br/>
            launch_date_unix: {value.launch_date_unix} <br/>
            launch_date_utc: {value.launch_date_utc} <br/>
                launch_window: {value.launch_window}</h5>
        </div>
    );
};

export default Space;