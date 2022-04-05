import { Route } from "react-router-dom";
import { Content } from "../components/body";
import { Hero } from "../components/navbar";
import { Marketing, OneRoute } from "../components/reusableCompts";
import { lazy } from 'react';

// const HeroSect = lazy(() => import('../components/navbar/hero/Hero'))

export const routes = [
    <Route
        path="/"
        element={
            <>
                <Hero />
                <Content />
            </>
        }
    />,
    <Route
        path="/admin/catalogue"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/orders"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/customers"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/marketing"
        element={
            <>
                <Marketing />
            </>
        }
    >
        <Route
            path="/admin/marketing/discount"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/intent"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/features"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/conversion"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/abandonment"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/checkout"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/social"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/specialOffer"
            element={
                <>
                    <Marketing />
                </>
            }
        />
        <Route
            path="/admin/marketing/seasonalOffers"
            element={
                <>
                    <Marketing />
                </>
            }
        />
    </Route>,
    <Route
        path="/admin/delivery"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/payment"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/store"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/subscriptions"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/integrations"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/extensions"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/settings"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/logout"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/support"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/share"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
    <Route
        path="/admin/shops"
        element={
            <>
                <OneRoute />
            </>
        }
    />,
];