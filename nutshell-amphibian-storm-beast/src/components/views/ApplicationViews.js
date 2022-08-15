import { Outlet, Route, Routes } from "react-router-dom"

export const ApplicationViews = () => {

    return <>
            <Routes>
                {<Route path="/" element={
                    <>
                        <h1>Nutshell</h1>

                        <Outlet />
                    </>
                }>
                    {/* <Route path="locations" element={ <Locations /> } />
                    <Route path="products" element={ <ProductContainer /> } />
                    <Route path="product/create" element={ <ProductForm /> } />  */}                
                </Route>}
            </Routes>
        </>
}