import './Skills.css'
import gif from '../../../images/programmergif3.gif'
import {Grid} from '@material-ui/core'



const Skills = () => {

    const iconArray=[{'iconName':"devicon-react-original colored",'hover': 'ReactJS'} ,
    {'iconName':"devicon-flutter-plain colored",'hover':'Flutter'},
    {'iconName':"devicon-javascript-plain colored",'hover':'JavaScript'},
    {'iconName':"devicon-nodejs-plain colored",'hover':'NodeJs'},
    {'iconName':"devicon-python-plain colored",'hover':'Python'},
    {'iconName':"devicon-mysql-plain colored",'hover':'MySQL'},
                    {'iconName':"devicon-materialui-plain colored",'hover':'MaterialUI'},
                    {'iconName':"devicon-git-plain",'hover':'Git'},
                    {'iconName':"devicon-html5-plain colored",'hover':'Html5'}, 
                    {'iconName':"devicon-css3-plain colored",'hover':'CSS'},
                    {'iconName':"devicon-tensorflow-original",'hover':'TensorFlow'},
                    {'iconName':"devicon-firebase-plain colored",'hover':'FireBase'},
                    
                    
                ]
    const buildTable = (data) => {
        return(
            <div className='iconArrayContainer'>
            <Grid  container justify='center' spacing={4}>
                {
                    data.map( (icon) => (
                        <Grid rowSpacing={1} item xs={12} sm={6} md={3} lg={3}>
                            <div className='iconWrapper' data-hover={icon.hover}>
                                <i   class={icon.iconName}></i>
                            </div>
                        </Grid>
                    ))
                }
                
            </Grid>
            </div>   
        )
    }
    return (
        
        <div className='skillsContainer'>
            <div className='skillsTitleDiv'>
                <h1> Fullstack developer aiming to explore every tech stack! </h1>
            </div>
            <div className='mediaContainer' >
                <div className='animationContainer'>
                    <section className='iconContainer--react'> 
                        <i class="devicon-react-original colored"></i>
                    </section>
                    <section className='iconContainer--html'> 
                        <i class="devicon-html5-plain colored"></i>
                    </section>
                    <section className='iconContainer--css'> 
                        <i class="devicon-css3-plain colored"></i>
                    </section>
                    <section className='iconContainer--python'> 
                        <i class="devicon-python-plain colored"></i>
                    </section>
                    <section className='iconContainer--github'>                         
                    <i style={{color:'white'}} class="devicon-github-original"></i>
                    </section>
                   
                    <section className='iconContainer--raspberrypi'>                         
                        
                        <i class="devicon-raspberrypi-line colored"></i>
                    </section>
                    <section className='iconContainer--materialui'>                         
                        
                    </section>

                </div>
                <img className='skillsDivGif' src={gif}/>

            </div>
            
            <div className='skillsTextDiv'>
                
                {buildTable(iconArray)}
                <ul >
                    <li>
                        <h3>Develop highly interactive Front end / User Interfaces for your web applications</h3>
                    </li>
                    <li>
                        <h3>Cross-platform mobile app development with native performance </h3>
                    </li>
                    <li>
                        <h3> Integration of third party services such as Firebase/ CommerceJS/ Stripe </h3>
                    </li>
                </ul>
            </div>
     
            
        </div>
        
    )
}

export default Skills
