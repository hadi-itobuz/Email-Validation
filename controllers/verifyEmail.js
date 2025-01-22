import jwt from 'jsonwebtoken'

const verifyEmail= (req, res)=>{
    const {token} = req.params;
    console.log('token :>> ', token);
    jwt.verify(token, 'ABC123', function(err, decoded) {
        if (err) {
            console.log(err);
            res.send("Email verification failed, possibly the link is invalid or expired");
        }
        else {
            res.send("Email verifified successfully");
            console.log(' VERIFIED ');
        }
    });
}
export default verifyEmail;
