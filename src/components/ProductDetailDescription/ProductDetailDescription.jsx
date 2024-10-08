import "./ProductDetailDescription.css"

const ProductDetailDescription = () => {
    const product = {
        name: 'Tênis Nike Revolution 6 Next Nature Masculino',
        rating: 4.5,
        price: '199.99',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel sem nec diam maximus laoreet. Cras ac nunc erat. Vivamus bibendum fringilla tellus, vitae fermentum massa. Mauris ultricies lobortis laoreet. Curabitur dapibus felis a mi tincidunt, eu suscipit diam porta. Donec placerat felis a felis fermentum, eget eleifend enim aliquet. Aliquam erat volutpat.',
        sizes: [38, 39, 40, 41, 42],
        colors: ['#E2E3FF', '#FFE8BC', '#FFC0BC', '#DEC699', '#E8DFCF']
  };

    return(
        <main className="product-detail-description">
            <h1 className="product-name">{product.name}</h1>
            <p className="product-code">Casual | Nike | REF:38416711</p>
            <div className="product-rating">⭐ {product.rating} / 5</div>
            <div className="product-price">
                <span>R$ </span>
                    ${product.price}
                <span>,00</span>
            </div>
            <div>
                <p className="product-description-topics">Descrição do produto</p>
                <p className="product-description">{product.description}</p>
            </div>
            <div className="product-sizes">
                <p className="product-description-topics">Tamanho</p>
                <div className="sizes-grid">
                {product.sizes.map((size, index) => (
                    <div key={index} className="size-box">{size}</div>
                ))}
                </div>
            </div>

            <div className="product-colors">
                <p className="product-description-topics">Cor</p>
                <div className="colors-grid">
                    {product.colors.map((color, index) => (
                        <div 
                        key={index} 
                        className="color-circle" 
                        style={{ backgroundColor: color }}>
                        </div>
                    ))}
                </div>
            </div>
            <button className="buy-button">Comprar</button>
        </main>
    )
}

export default ProductDetailDescription