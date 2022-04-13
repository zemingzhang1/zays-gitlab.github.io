import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, CardMedia, Typography, Grid, Container, Item } from '@material-ui/core/';

var projectCountz = 0;

var array= [];     

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: theme.palette.primary.light,
    },
    card: {
        maxWidth: 250,
        margin: 0,
    },
    media: {
        height: 160,
    },
}));

// style={{width:"300px", marginLeft:'10px',marginRight:"10px"}}
export default function Portfolio(props) {
    const classes = useStyles();

    // window.onresize = function(event) {
    //     var width = document.getElementById("portfolio-wrapper").clientWidth;;
    //     var rowFit = Math.floor(width/300);
    //     var newMarg = (width-(rowFit*300))/(rowFit*2)
    //     console.log(rowFit);        
    //     for (let i of array){
    //         var element = document.getElementById(i);
    //         element.style.marginLeft = String(newMarg) + 'px';
    //         element.style.marginRight = String(newMarg) + 'px';
    //         element.style.float = "left"
    //     }
    // };
    
    if (props.data) {
        var projects = props.data.projects.map(
        function (projects) {
            array.push(projects.title+"@projectID");
            var projectImage = 'images/portfolio/' + projects.image;
            return (
                <div key={projects.title} id={projects.title+"@projectID"} className="columns portfolio-item">
                    <div class="card">
                        <div class="face face1">
                            <div class="content">
                            <CardActionArea href={projects.url}>
                                <span class="stars"></span>
                                <h2 class="javascript" >{projects.skills}</h2>
                                <p class="javascript"> {projects.category}</p>
                            </CardActionArea>
                            </div>
                        </div>
                        <div class="face face2">
                            <h2>{projects.title}</h2>
                        </div>
                    </div>
                </div>
            )
        })
    }

    // const myelement = (
    //     <div class="card">
    //         <div class="face face1">
    //             <div class="content">
    //                 <span class="stars"></span>
    //                 <h2 class="javascript">Github Projects</h2>
    //                 <p class="javascript"> Please click on this site to see more of my projects, finished and unfinished :) </p>
    //                 </div>
    //             </div>
    //         <div class="face face2">
    //             <h2>01</h2>
    //         </div>
    //     </div>
    // );
    
    return (
        <section className={classes.root} id="portfolio">
            <Container className="row">
            <h1>Check Out Some of My Works.</h1>
                <div id="portfolio-wrapper" className=" bgrid-halves s-bgrid-thirds cf">
                        {projects}
                </div>
            </Container>
        </section>
    );
}

// var projects = props.data.projects.map(
//     function (projects) {
//         var projectImage = 'images/portfolio/' + projects.image;

//         return (
//             <div key={projects.title} className="columns portfolio-item">
//             <Card className={classes.card}>
//                 <CardActionArea href={projects.url}>
//                     <CardMedia className={classes.media} image={projectImage} title={projects.title} />
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="h2">{projects.title}</Typography>
//                         <Typography variant="body2" gutterBottom>{projects.category}</Typography>
//                     </CardContent>
//                 </CardActionArea>
//             </Card>
//             </div>
//         )
//     })