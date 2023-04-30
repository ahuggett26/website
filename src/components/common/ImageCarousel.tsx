import { Component } from "react";
import './ImageCarousel.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface State {
    imageIndex: number;
}

interface Props {
    images: Image[];
    hoverText: String;
}

export class Image {
    src: string;
    alt: string;

    constructor(src: string, alt: string) {
        this.src = src;
        this.alt = alt;
    }
}

class ImageCarousel extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { imageIndex: 0 }
    }

    onImageChanged(imgIndex: number) {
        this.setState({imageIndex: imgIndex});
    }

    render() {
        // original image resolution: 4/3
        // original image size: 4032x3024
        // current image resolution: 16/9
        // current image size: 1344x756
        const image = this.props.images[this.state.imageIndex];
        return (
            <div className="image-carousel">
                <div className="image-carousel-image-holder">
                    <LazyLoadImage
                        className="image-carousel-image"
                        src={image.src}
                        alt={image.alt}
                        effect="blur"/>
                    <div className="image-carousel-hover">
                        {this.props.hoverText}
                    </div>
                </div>
                <div className="image-carousel-radio-buttons">
                    {this.props.images.map((_img, index) => {
                        const key = "image-carousel-radio-" + index;
                        const radioBtn = index === this.state.imageIndex 
                            ? <input type="radio" name="currImg" defaultChecked onChange={() => this.onImageChanged(index)}/>
                            : <input type="radio" name="currImg" onChange={() => this.onImageChanged(index)}/>
                        return (
                            <span className="image-carousel-radio-btn-holder" key={key}>
                                {radioBtn}
                                <span className="image-carousel-custom-radio"/>
                            </span>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default ImageCarousel;