import { Box, Card, CardContent, Typography } from '@mui/material';

function Contact() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
            <Card sx={{ maxWidth: 500, boxShadow: 3 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Contact Info
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        You can contact me at:
                    </Typography>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li>Email: Dnoe112995@yahoo.com</li>
                        <li>Phone: (903) - 738 - 6157</li>
                        <li>LinkedIn: Place Holder</li>
                    </ul>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Contact;
