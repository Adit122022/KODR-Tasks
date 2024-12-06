import React from 'react';

const Card = () => {
    const arr = [ 
        { img: 'https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0f2f8c562d5ec23fe20e_VANMOOK_HEADER-p-1080.webp' },
        { img: 'https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbe5150f5f7884b492573_GAAF_Header-p-1080.webp' },
        { img: 'https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64b164fa9716bc66dcf4137e_ADEKWAAD_BrandBox-min-p-1080.webp' },
        { img: 'https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64bfbdd62241c685d9999607_DM_Ashtray-min-p-1080.webp' },
        { img: 'https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cc0eccc99b0aed7676e414_FL_Werkboek-cover_Nan-min-p-1080.webp' }
    ];

    return (
        <div className="flex w-full ">
            {arr.map((value, index) => (
                <div key={index} className="w-52 h-96 rounded-lg ">
                    <img className='object-cover w-full h-full  rounded-lg' src={value.img} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Card;
