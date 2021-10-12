import React , {FormEvent, useState, useRef} from 'react'
import './Contact.css'
import {InputBase, TextField, Button, CardContent ,Grid,Card, Typography} from '@material-ui/core'
import axios from "axios"
import { makeStyles } from '@material-ui/styles'
// import ReCAPTCHA from 'react-google-recaptcha'
import ReCAPTCHA from "react-google-recaptcha";
// import { Field, reduxForm } from 'redux-form'
// import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'

const useStyles = makeStyles( () => ({
    TextField:{
        
        backgroundColor:'rgba(80,80,80,0.2)',
        color:'#fff',
        // border:'1px solid rgba(80,80,80,0.2)',
    },
    Button:{
        backgroundColor:'#ce8c36e3',
    },
}))


type FormState ={
    email: string;
    name: string;
    message: string;
}
type ServiceMessage = {
    class:string;
    text: string;
}

const Contact = () => {

    
    const classes= useStyles();

    const formId = 'DVPPT8SR';

    const formSparkUrl = `https://submit-form.com/${formId}`;

    const initialFormState = {
        name:'',
        email:'',
        message:''
    }
    const recaptchaKey = '6LeCVbMcAAAAAA1FzYgd0s29-k0IpRr8xFB3jyri';

    const [formState, setFormState] = useState<FormState>(initialFormState);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [message, setMessage] = useState<ServiceMessage>();
    const [recaptchaToken, setRecaptchaToken] = useState<string>();
    const recaptchaRef = useRef<any>();

    const submitForm = async (event:FormEvent ) => {
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false)
    };

    const postSubmission = async() => {
        const payload = {
            ...formState,
            "g-recaptcha-response":recaptchaToken
        };
        
        try{
            const result = await axios.post(formSparkUrl, payload)
            
            setMessage({
                class:'messageSuccess',
                text: 'Thank you! , I will be in touch with you shortly'
            })
            setFormState(initialFormState)
            recaptchaRef.current.reset();
        }catch(error){
            // console.log(error)
            setMessage({
                class:'messageFail',
                text: 'Sorry, there was a problem, Please try again!'
            })
        } 
    }
    const updateFormControl = (event: any)=>{
        const {id, value} = event.target
        const formKey = id as keyof FormState
        const updatedFormState = { ...formState};
        updatedFormState[formKey] = value;
        setFormState(updatedFormState)
    }


    const updateRecaptchaToken = (token:string | null) => {
        setRecaptchaToken(token as string) ;
    };

    return (
        <div className='contactDiv'>
            <div className='contactTextDiv'>
                <h1> Reach Out to me!</h1>
                <h3> Want to discuss a project or just chat? Just leave me a message!</h3>
                
                <button className='locationButton'>
                <p> Ankara, Turkey </p>
                <i className="fas fa-map-marker-alt"></i>
                </button>
                <ul className='socialLinksUL'>
                <li>
                    <a href="https://www.linkedin.com/in/harithaseddik/" target='_blank'><i className="fab fa-linkedin-in icon"></i></a>
                    </li>
                <li>
                    <a href="https://github.com/HarithaSeddik" target='_blank' ><i className="fab fa-github icon"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/harithaakkad/" target='_blank'>
                    <i className="fab fa-instagram icon"></i>    </a>
                </li>
                
            </ul>
            </div>
            
            <Grid>
                <div className='customCard' style={{ maxWidth: 350, padding: "10px 5px", margin: "0 auto" }}>
                    <CardContent>
                        <Typography style={{color: '#ce8c36e3'}} gutterBottom variant="h5">
                            Leave a message!
                        </Typography> 
                        { message &&
                            <div className={message.class}>
                            <Typography variant="body2" style={{color:'#fff'}} component="p" gutterBottom>
                                {message.text}
                            </Typography>
                            </div>
                        }
                        <form onSubmit={submitForm}>
                            <Grid container spacing={2}>
                                <Grid className='textField'xs={12}  item>
                                    <div >
                                    <TextField 
                                    onChange={updateFormControl}
                                    className={classes.TextField}
                                    placeholder="Enter your name" 
                                    label="Name" variant="outlined" fullWidth required 
                                    id='name'
                                    value = {formState.name}
                                    />
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    id='email' 
                                    onChange={updateFormControl} 
                                    className={classes.TextField} 
                                    type="email" 
                                    placeholder="Enter email" 
                                    label="Email" 
                                    variant="outlined" 
                                    fullWidth required 
                                    value= {formState.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField 
                                    id='message' 
                                    onChange={updateFormControl} 
                                    className={classes.TextField} 
                                    label="Message" 
                                    multiline rows={4} 
                                    placeholder="Type your message here" 
                                    variant="outlined" 
                                    fullWidth 
                                    required 
                                    value={formState.message}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={recaptchaKey}
                                    onChange={updateRecaptchaToken}
                                />

                                
                                </Grid>
                                    <Button 
                                    disabled={submitting} 
                                    className={classes.Button} 
                                    type="submit" 
                                    variant="contained" 
                                    color="primary" 
                                    fullWidth>
                                        {submitting? 'Submitting' :'Submit'}
                                    </Button>
                            </Grid>
                        </form>
                    </CardContent>
                </div>
      </Grid>    
                    
            </div>
        
    )
}

export default Contact
