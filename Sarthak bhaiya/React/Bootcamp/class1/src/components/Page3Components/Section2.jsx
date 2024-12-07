import React from 'react'

const Section2 = () => {
  return (
    <div className="py-10 px-20">
            <div className="text-3xl font-semibold border-b-2 border-solid border-black pb-3">
                <h1>Did some cool stuff for</h1>
            </div>
            <div className="flex justify-between py-5 w-3/4">
                <div className="flex flex-col gap-5 text-3xl text-zinc-400">
                    <h3>Bewakingsdienst van MOOK</h3>
                    <h3>Van der Heijden bouw</h3>
                    <h3>Speyz</h3>
                    <h3>Zeth</h3>
                </div>
                <div className="flex flex-col gap-5 text-3xl text-zinc-400">
                    <h3>Ozo Verbindzorg</h3>
                    <h3>Signal Stream</h3>
                    <h3>Gaaf creaties</h3>
                    <h3>Lunenburg Events</h3>
                </div>
                <div className="flex flex-col gap-5 text-3xl text-zinc-400">
                    <h3>Twofiftyk</h3>
                    <h3>Adekwaad</h3>
                    <h3>Zoet moment</h3>
                    <h3>Forex library</h3>
                </div>
            </div>
            <div className="flex justify-end">
                <img src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg" alt="" className="animate"/>
            </div>
        </div>
  )
}

export default Section2