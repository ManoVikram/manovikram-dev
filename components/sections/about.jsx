import React from 'react'

const About = () => {
    return (
        <section id="about" className="w-full my-24 md:my-28 lg:my-32">
            <div className="flex flex-col md:flex-row jusify-start items-start gap-6 md:gap-24">
                <h5 className="text-3xl">Ethos</h5>

                <h4 className="text-4xl/relaxed">Crafting software with high taste and zero noise. <span className="text-black/40">I build things that feel good to use and age even better.</span></h4>
            </div>
        </section>
    )
}

export default About