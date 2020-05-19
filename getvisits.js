/*https://stackoverflow.com/questions/32038180/need-example-of-calling-aws-lambda-from-javascript*/
function callAwsLambdaFunction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("visits").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "https://ifsmy94ndd.execute-api.eu-west-1.amazonaws.com/visits", true);
    xhttp.send();
}
