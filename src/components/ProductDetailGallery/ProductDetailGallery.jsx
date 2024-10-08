import "./ProductDetailGallery.css"
import { useState } from "react"
import WhiteNike1 from "../../assets/white-nike-1.png"
import WhiteNike2 from "../../assets/white-nike-2.png"
import WhiteNike3 from "../../assets/white-nike-3.png"
import WhiteNike4 from "../../assets/white-nike-4.png"
import WhiteNike5 from "../../assets/white-nike-5.png"

const ProductDetailGallery = () => {
    const [mainImage, setMainImage] = useState(WhiteNike5)

    const images = [
        WhiteNike1,
        WhiteNike2,
        WhiteNike3,
        WhiteNike4,
        WhiteNike5
  ];
    return(
        <main className="product-detail-gallery">
            <img src={mainImage} alt="Produto" className="main-image" />
            <div className="image-thumbnails">
                {images.map((img, index) => (
                <img 
                    key={index} 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => setMainImage(img)} 
                    className="thumbnail-image"
                />
                ))}
            </div>
        </main>
    )
}

export default ProductDetailGallery