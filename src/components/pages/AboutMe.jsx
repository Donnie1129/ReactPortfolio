import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import myImage from '../../assets/Original.JPG';

function About() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
            <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
                <CardMedia
                    component="img"
                    height="300"
                    image={myImage}
                    alt="Donald Noe"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        About Me
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Hi, my name is Donald Noe. I have almost graduated from the fullstack web development bootcamp through the University of Texas at 
                        Austin. It has been a very challenging but rewarding experience, and I am hoping to apply what I have learned to pursue a career 
                        in software engineering! This bootcamp has given me a solid foundation in web development, and I have learned about the many 
                        different languages and tools used in development. I now have experience with HTML, CSS, Javascript, Node, Express, MySQL, 
                        Sequelize, MongoDB, Mongoose, React, GraphQL, and a solid understanding of the MERN stack. While I know that there is still much 
                        to learn, I am excited to begin my journey, and hopefully start a career in tech! I am open to any positions available and don't 
                        necessarily want to limit myself to just front or backend. I am a firm believer in becoming well-rounded in both aspects. I have 
                        completed this bootcamp while also working full time as an operations manager for a billion-dollar retail corporation, and am also 
                        a father of two.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default About;
