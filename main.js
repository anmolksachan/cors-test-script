function main() 
{
    console.log("Anmols-cors-test");
    $.ajax
    ({
        url: "https://linkTo.test",
        success: function(data) 
        {
            console.log(data);
        }
    });
}
