import React from 'react';

const CardSection = () => {
    const arr = [
        {
            img: 'https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64cac464ae61273a7c937ded_BRAND%20STORY_Over-Nan-p-500.jpg',
            heading: "Brand Story",
            description: 'Samen creëren we een sterk fundament voor een onweerstaanbaar design.',
            color: "#AA81B7",
        },
        {
            img: 'https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e8b3be191fdc49c321d_NaN_Merkidentiteit-p-500.jpg',
            heading: "Merkidentiteit",
            description: 'Samen creëren we een sterk fundament voor een onweerstaanbaar design.',
            color: "#10100F",
        },
        {
            img: 'https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64e51e7766e8d5682bf6ee25_NaN_Webdesign-p-500.jpg',
            heading: "Webdesign",
            description: 'Merkgerichte websites op een methodische wijze. Custom made & tailor made.',
            color: "#36A96A",
        },
        {
            img: 'https://cdn.prod.website-files.com/648884be5f32a12e5da2392f/64bbb43e292b8b8352068a48_NaN_A%20la%20Carte.jpg',
            heading: "À la carte",
            description: 'Ondersteuning op het gebied van design, social media en content creatie.',
            color: "#FA8A58",
        },
    ];

    return (
       <div className='w-screen h-screen bg-white'>
       <div className='px-20 pt-20'>
        <p>Services</p>
        <div className='w-full h-full flex justify-between'>
        <p className='mt-8 text-2xl w-[20%] font-semibold'>Zo onderscheiden we je van de norm</p>
        <button class="p-4 underline-offset-4  content-end rounded-2xl h-fit  hover:rounded-[3rem] transition-all ease-linear duration-200 hover:underline 
       bg-black  text-white text-base font-semibold border border-1 border-gray-950 ">Lees meer <i class="ri-arrow-right-line ml-5"></i></button>
        </div>
       </div>
        <div className="flex md:w-[98vw] w-full md:h-[80vh] md:px-20 items-center md:gap-5 gap-3 px-4 ">
            {arr.map((value, index) => (
                <div
                    key={index}
                    className="md:w-[25%] w-28  md:h-4/5 shrink-0  rounded-3xl overflow-hidden group ">
                  <div className='w-full h-1/2 overflow-hidden group-hover:rounded-[3rem] transition-all duration-500'>
                  <img  className="object-cover w-full h-full group-hover:scale-110 transition-all duration-500"
                        src={value.img}
                        alt={value.heading}
                    />
                  </div>
                    <div  className="flex flex-col justify-center gap-5 h-1/2 px-4 group-hover:rounded-[3rem] transition-all duration-500" style={{ backgroundColor: value.color }} >
                        <div className='flex justify-between w-full'>
                        <h2 className="text-2xl text-white mb-2">{value.heading}</h2>
                        <i class="opacity-0 group-hover:opacity-100 ri-arrow-right-line text-white duration-500"></i>
                        </div>
                        <p className="text-white">{value.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
};

export default CardSection;
