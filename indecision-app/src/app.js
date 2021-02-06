var user = {
    username : "Maxima",
    age : 32,
    location : "Incheon, Galsan-dong",
    phone: '010-5698-96666'
};

var template = (
<div>
    <h1>This is some My JSX Tutorial.</h1>
    <p>Lets be positive, Okay?</p>
    <ol>
        <li>{user.username}</li>
        <li>{user.age}</li>
        <li>{user.location}</li>
        <li>{user.phone}</li>
    </ol>
</div>
);
var companyName = "Nextree (주)";
var postCode = 410025;
var myTemplate = (
    <div>
        <h1>{companyName.toUpperCase()} company, this is the best</h1>
        <p>Postcode: {postCode + 10000000}</p>
        <p>Established: 2003</p>
    </div>
);



var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, appRoot2);