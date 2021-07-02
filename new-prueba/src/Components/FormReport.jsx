import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from '@material-ui/core/Grid'
import React from "react";
import {
    MenuItem,
    OutlinedInput,
    FormControl,
    Select,
    InputLabel
} from "@material-ui/core"
import {TimePicker} from "@material-ui/pickers"
import moment from "moment"
import Button from '@material-ui/core/Button'




function FormReport({handleChange, form, customers, projects}) {

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography variant="h6" align="center" gutterBottom>
                    Formulario reporte de horas
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="employee" name="employee" variant="outlined" fullWidth margin="dense"
                    label="Empleado" onChange={handleChange} value={form.employee}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="dateBeg" name="dateBeg" label="Fecha inicial" type="date"
                    onChange={handleChange} variant="outlined" fullWidth margin="dense"
                    value={form.dateBeg}
                    InputLabelProps={{shrink: true}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <TextField
                    id="dateEnd" name="dateEnd" label="Fecha final" type="date"
                    onChange={handleChange} variant="outlined" fullWidth margin="dense"
                    value={form.dateEnd}
                    InputLabelProps={{shrink: true}}
                />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>

            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl
                    margin="dense" variant="outlined" fullWidth
                >
                    <InputLabel htmlFor="employment">Seleccione el cliente</InputLabel>
                    <Select
                        onChange={handleChange} name="customer"
                        input={<OutlinedInput labelWidth={130} name="customer"/>} label="Seleccione un cargo"
                        value={form.customer}
                    >
                        {
                            customers ? customers.map(customer => <MenuItem value={customer.id}
                                                                            key={customer.id}>{customer.name}</MenuItem>)
                                : null
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <FormControl
                    margin="dense" variant="outlined" fullWidth
                >
                    <InputLabel htmlFor="project">Seleccione el proyecto</InputLabel>
                    <Select
                        onChange={handleChange} name="project"
                        input={<OutlinedInput labelWidth={130} name="project"/>} label="Seleccione un proyecto"
                        value={form.project}
                    >
                        {
                            projects ? projects.map(project => <MenuItem value={project.id}
                                                                         key={project.id}>{project.name}</MenuItem>)
                                : null
                        }
                    </Select>
                </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <TextField
                    label="Descripción" name="description" onChange={handleChange} multiline rows={3} variant="outlined"
                    value={form.description} margin="dense" variant="outlined" fullWidth
                />
            </Grid>
        </React.Fragment>
    )
}

export default FormReport
