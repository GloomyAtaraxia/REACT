
{/* I created a function that will output the image card in the html page as well as a button inside the
body tag that will show an alert for simplicity purposes.  */}
function Body(){
        const handleShareButtonClick = () => {
            alert('Card Sent!!');
        };
    
        return (
            <div>
                <p>
                    We wish you all the best!!
                </p>
                <p>
                    <img src="src/assets/HBD.jpg" alt="HBD Image" />
                </p>
                
                <button onClick={handleShareButtonClick}>Share</button>
            </div>
        );
}

export default Body