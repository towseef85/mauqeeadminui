import React from "react";
// import Brands from "../../pages/brands";
import AddBrand from "../../pages/brands/AddBrand";
import Category from "../../pages/category";
import AddCategory from "../../pages/category/AddCategory";
import HomePage from "../../pages/home";
import Product from "../../pages/product";
import ProductSettings from "../../pages/productSettings";
import ProductAttributes from "../../pages/productSettings/ProductAttributes";
import TaxCategories from "../../pages/productSettings/TaxCategories";
const Brands = React.lazy(()=> import('../../pages/brands'))

export const routesList=[

    
    {
        id:1,
        routePath:'/catalog/brands',
        component:<Brands/>
    },
    {
        id:2,
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
    },
    {
        id:5,
        routePath:'/catalog/category',
        component:<Category/>
    },
    {
        id:6,
        routePath:'/catalog/category/:id',
        component:<Category/>
    },

    {
        id:7,
        routePath:'/catalog/category/create',
        component:<AddCategory/>
    },
    {
        id:8,
        routePath:'/catalog/category/create/:id',
        component:<AddCategory/>
    },
    {
        id:9,
        routePath:'/catalog/products',
        component:<Product/>
    },
    {
        id:12,
        routePath:'/catalog/products/:id',
        component:<Product/>
    },
    {
        id:10,
        routePath:'/catalog/products/create',
        component:<Product/>
    },
    {
        id:11,
        routePath:'/catalog/products/create/:id',
        component:<Product/>
    },
    {
        id:12,
        routePath:'/catalog/product/settings',
        component:<ProductSettings/>
    },
    {
        id:13,
        routePath:'/productsettings/productattributes',
        component:<ProductAttributes/>
    },
    {
        id:14,
        routePath:'/productsettings/taxcategory',
        component:<TaxCategories/>
    }

]