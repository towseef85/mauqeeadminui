import Brands from "../../pages/brands";
import AddBrand from "../../pages/brands/AddBrand";
import HomePage from "../../pages/home";

export const routesList=[

    
    {
        id:1,
        routePath:'/catalog/brands',
        component:<Brands/>
    },
    {
        id:1,
        routePath:'/catalog/brands/:id',
        component:<Brands/>
    },

    {
        id:3,
        routePath:'/catalog/brands/create',
        component:<AddBrand/>
    },
    {
        id:4,
        routePath:'/catalog/brands/create/:id',
        component:<AddBrand/>
    }

]