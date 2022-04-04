import { Grid } from "@mui/material";
import React from "react";
import { Routes } from "react-router-dom";
import "./App.css";
import { TheDrawer } from "./features";
import { routes } from "./routes/Routes";


export const App: React.FC = (): JSX.Element => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TheDrawer>
                    <Routes>
                        {routes?.map((route) => {
                            return <>{route}</>
                        })}
                    </Routes>
                </TheDrawer>
            </Grid>
        </Grid>
    );
};
