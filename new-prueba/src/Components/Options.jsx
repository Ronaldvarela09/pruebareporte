import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

function Options({handleAddForm}) {

    return (
        <React.Fragment>
            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-end"
            >
                <Button variant="contained" onClick={handleAddForm} color="secondary">
                    Nuevo
                </Button>
            </Grid>
        </React.Fragment>
    )
}

export default Options
