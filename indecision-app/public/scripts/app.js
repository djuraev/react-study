"use strict";

var user = {
    username: "Maxima",
    age: 32,
    location: "Incheon, Galsan-dong",
    phone: '010-5698-96666'
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "This is some My JSX Tutorial."
    ),
    React.createElement(
        "p",
        null,
        "Lets be positive, Okay?"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            user.username
        ),
        React.createElement(
            "li",
            null,
            user.age
        ),
        React.createElement(
            "li",
            null,
            user.location
        ),
        React.createElement(
            "li",
            null,
            user.phone
        )
    )
);
var companyName = "Nextree (주)";
var postCode = 410025;
var myTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        companyName.toUpperCase(),
        " company, this is the best"
    ),
    React.createElement(
        "p",
        null,
        "Postcode: ",
        postCode + 10000000
    ),
    React.createElement(
        "p",
        null,
        "Established: 2003"
    )
);

var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(myTemplate, appRoot);
ReactDOM.render(template, appRoot2);
