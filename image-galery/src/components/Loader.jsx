import React, { useState } from 'react';
import { TailSpin } from 'react-loader-spinner'
function Loader(loading) {

    // const [loading, setLoading] = useState(true)
    return (<>
        {loading && <div>
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                visible={loading}
            />
        </div>}


    </>);
}

export default Loader;