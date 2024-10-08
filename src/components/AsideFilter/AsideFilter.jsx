import "./AsideFilter.css"

export const AsideFilter = () => {
    return (
        <>
            <aside className="product-list-filter">
                <h3>Filtrar por</h3>
                <form className="product-list-filter-form">
                    <p>Marka</p>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Adidas
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Calenciaga
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        K-Swiss
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Nike
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Puma
                    </label>
                    <p>Categoria</p>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Esporte e Lazer
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Casual
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Utilitário
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Corrida
                    </label>
                    <p>Gênero</p>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Masculino
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Feminino
                    </label>
                    <label htmlFor="">
                        <input type="checkbox" name="" id="" />
                        Unissex
                    </label>
                    <p>Estado</p>
                    <label htmlFor="">
                        <input type="radio" name="" id="" />
                        Novo
                    </label>
                    <label htmlFor="">
                        <input type="radio" name="" id="" />
                        Usado
                    </label>
                </form>
            </aside>
        </>
    )
}