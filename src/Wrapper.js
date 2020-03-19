import React from 'react';
import TextField from '@material-ui/core/TextField'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Icon from '@material-ui/core/Icon';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//import colors from '@material-ui/core/colors';
import Checkbox from '@material-ui/core/Checkbox';
import { SketchPicker } from 'react-color'
import Box from '@material-ui/core/Box';
//import * as constants from "./common/Constants";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        maxWidth: 300,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    },
    noLabel: {
        marginTop: theme.spacing(3),
    },
}));






class Wrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            required: true
        }
    }


    names = [];



    addvalue = event => {
        let val = event.target.value;
        var set = new Set();
        this.names = val.split("\n");
        var arr = [];
        
        var limit = 40;
        var v = event.target.value; //var v = $(this).val();
        var lines = val.split(/(\r\n|\n|\r)/);
        var newtext = "";
        for (var i = 0; i < lines.length; i++) {
            var line = lines[i];
            if (line.length > limit) {
                line = line.substr(0, limit);
                alert("only 40 charachers are allowed");
            }
            newtext += line;
        }
        event.target.value = newtext;


        for (var i = 0; i < this.names.length; i++) {
            set.add(this.names[i]);
        }
        var count = 0;

        set.forEach((value) => {
            if (count < 50) {
                arr[count] = value;
                count++;
            }
        })





        this.setState({
            names: arr,
            required: true,

            //unique = [...new Set(names)]
        });


        console.log(this.state.names);
    }



    valuCheck = event => {
        if (event.target.checked) {
            this.setState({
                required: true
            })

        }
        else {
            this.setState({
                required: false
            })
        }

        console.log("-----------------", this.state.required);
    }
    render() {
        return (
            <ThemeProvider>
                <form class="form" method="post" onsubmit="results();" >
                    <div >
                        <label class="label" >
                            Lable
                    </label>

                        <span >
                            <TextField id="outlined-basic" class="textf"
                                placeholder="Sales Region" variant="outlined" required="true" />
                        </span>
                    </div>
                    <br></br>
                    <div>
                        <label class="label">
                            Type
                        </label>

                        <span>
                            <span class="inner_lable">Multi-Select</span>

                            <Checkbox
                                defaultChecked
                                id="type"
                                value="secondary"
                                color="primary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                onChange={this.valuCheck}
                            />
                        </span>

                    </div>

                    <div >
                        <label class="label" >
                            Default Value
                    </label>

                        <span >

                            <TextField id="outlined"
                                placeholder="Asia" variant="outlined"
                                required={this.state.required}
                                style={{ MarginRight: '20px', width: '23%' }} />
                            <br />
                        </span>
                    </div>

                    <br></br>

                    <div >
                        <label class="label" >
                            Choices
                    </label>

                        <span >

                            <TextareaAutosize
                                id="mail"
                                hintText="Asia"
                                type="text"
                                style={{ width: '50%' }}
                                onChange={this.addvalue}


                            //onblur="this.value=removeSpaces(this.value);"
                            />
                            <br />
                            <br />
                        </span>
                    </div>

                    <div>

                        <label class="label" >
                            orders
                            </label>
                        <FormControl >
                            <InputLabel id="demo-controlled-open-select-label">Display Choices in Alphabetical</InputLabel>

                            <Select id="orders"
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                style={{ width: '250px', float: 'clear' }}
                            >

                                {this.state.names.map(name => (
                                    <option key={name} value={name}>
                                        {name}
                                    </option>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    <br />
                    {/* <div>
                             /* <Button variant="contained" value="submit"  onsubmit="results();"
                        style={{backgroundColor:"#4caf50", width: '160px'}} >

                            <b>Save Changes</b>

                        </Button>
                        <label><b> OR </b></label>
                        <Button color="secondary">Cancel</Button>
                              </div>
                        <br/>
                    <Button type="reset" variant="contained" color="#4caf50"
                    style={{backgroundColor:"#66c2ff", width: '160px'}}>
                        Reset

                   </Button>*/}



                    <button class="button button2" type="submit" value="Submit" >
                        Save Changes</button>
                    <button class="reset button3" type="reset" width='160px'>Reset</button>


                </form>
            </ThemeProvider >


        );
    }
}






export default Wrapper;