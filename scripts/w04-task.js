/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Hunter Gundersen",
    photo: "images/selfie.jpg",
    favoriteFoods: ["Chicken Pot Pie", "Hamburgers", "Sour Patch Kids"],
    hobbies: ["Video Games", "Programming", "Spanish", "Weightlifting"],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Las Vegas, NV",
        length: "8 years"
    },
    {
        place: "Cheyenne, WY",
        length: "3 Years"
    },
    {
        place: "Las Vegas, NV",
        length: "10 Years"
    },
    {
        place: "Morgantown, WV",
        length: "Less than 1 Year"
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobbies => {
    let li = document.createElement("li");
    li.textContent = hobbies;
    document.querySelector("#hobbies").appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(function(value){
    let dt = document.createElement("dt");
    dt.textContent = value.place;
    document.querySelector("#places-lived").appendChild(dt);
    let dd = document.createElement("dd");
    dd.textContent = value.length;
    document.querySelector("#places-lived").appendChild(dd);
});

