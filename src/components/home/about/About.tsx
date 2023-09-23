import { useEffect } from "react";
import styles from './About.module.scss';
import ImageCarousel, { Image } from "../../common/ImageCarousel";
import image1 from '../../../resources/images/about/estonia-fountain.jpg';
import image2 from '../../../resources/images/about/georgia-batumi.jpg';
import image3 from '../../../resources/images/about/georgia-roadside.jpg';
import image4 from '../../../resources/images/about/montreal-bridge.jpg';
import image5 from '../../../resources/images/about/niagara-whirlpool.jpg';
import image6 from '../../../resources/images/about/squamish-forest.jpg';
import image7 from '../../../resources/images/about/stanley-park.jpg';
import image8 from '../../../resources/images/about/vancouver-lake.jpg';

const About = () => {
    useEffect(() => {
        document.title = "About - ahuggett.uk"
    })

    const images = [
        new Image(image1, "A fountain in Estonia"),
        new Image(image2, "A town in Georgian hills"),
        new Image(image3, "Some mountains in Georgia"),
        new Image(image4, "A bridge in Montreal"),
        new Image(image5, "A whirlpool near Niagara"),
        new Image(image6, "Sky Pilot Trail, Squamish"),
        new Image(image7, "A split bridge in Stanley Park"),
        new Image(image8, "A lake in Vancouver")];
    const hoverText = "I don't take any selfies, so here are some of my favourite pictures that I've taken on my travels recently."
                + "\nI'm also not the best photographer, as you can probably see!";
    return (
        <div className={styles["about-container"]}>
            <p>
                Hi! My name is Andrew Huggett, I am a software engineer from West Sussex, in the south of England.<br/>
                I currently work for Diffblue, an Oxford based company that produces AI for code.
            </p>
            <ImageCarousel images={images} hoverText={hoverText}/>
            <p>
                I work across the tech stack, but my expertise is in on the front-end, in particular with user-facing code.
                Java is my most used language, but I am well versed in TypeScript, HTML and CSS.
            </p>
            <p>
                During my weekends and days off, I have a range of personal projects that I work on.
                More recently I made more of an effort to “complete” these: take a look at the Portfolio tab for an overview.
                I only have a certain amount of time though; I find that there is always more that I want to do, than what I have time for 😅
            </p>
            <p>
                One of my main joys in life is football - most weekends I make my way down to Brighton with my dad to watch the game.
                I have been a Brighton fan since we got promoted from League 1 at the Withdean and a season ticket holder
                since we moved to Falmer in 2011, and the matches remain one of the highlights of my week. 
            </p>
        </div>
    );
}

export default About;