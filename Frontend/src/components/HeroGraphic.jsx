import React from 'react';

export function HeroGraphic() {
  return (
    <div className="relative w-full h-[400px] lg:h-[500px] bg-accent3/20 flex items-center justify-center rounded-lg shadow-xl">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" 
             style={{backgroundImage: "url('/images/lab_placeholder.jpg')"}}>
        </div>
        <div className="relative p-8 text-center text-dark/90">
            <h2 className="text-4xl font-black text-accent1">WHO-GMP QUALITY</h2>
            <p className="mt-2 text-xl font-light">Ensuring excellence in every product.</p>
            {/*  */}
        </div>
    </div>
  )
}
