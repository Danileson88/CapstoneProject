import React from "react";

export default function About(props) {
    return(
        <section className="about-section">
            <div className="about-title">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Aliquip ad cupidatat nisi tempor labore occaecat pariatur ea deserunt 
                    nulla cupidatat commodo cupidatat. Nisi consequat aliquip ullamco ad 
                    ex sunt cillum culpa consequat mollit aute laboris adipisicing.
                     Consequat amet excepteur adipisicing in Lorem laborum 
                     reprehenderit magna dolore veniam proident nulla sunt labore.
                      Sunt sint quis fugiat quis amet quis pariatur eu dolor proident ut anim mollit.
                       Amet aute consequat laboris aliqua quis sit proident dolore proident enim. 
                       Ex ut officia duis nulla commodo tempor eiusmod.
                </p>
            </div>
            <div className="about-images">
                <img src="images/about-img.jpg" className="about-img1"/>
                <img src="images/about-img2.jpg" className="about-img2"/>
            </div>
        </section>
    )
};