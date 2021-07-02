import {BrowserRouter, Route} from 'react-router-dom'
import IndexPage from "../Pages/IndexPage"
import {ThemeProvider} from '@material-ui/core'
import theme from "../themeConfig"
import {makeStyles} from "@material-ui/core/styles"

const useStyles = makeStyles({
    divContent: {
        padding:'35px'
    }
});

function App() {

    const classes = useStyles();

    return (
        <div className={classes.divContent}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <Route exact path="/" component={IndexPage}/>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
