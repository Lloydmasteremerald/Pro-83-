var images = ["Ninjagoseason12poster2.webp", "images.jpg", "Kai.jpg","Zane.jpg", "download (3).jpg", "download (2).jpg", "6otuxgia-1920.jpg"];

var names = ["Ninja Book", "Jay - Lightning Ninja", "Kai - Fire Ninja", "Zane - Ice Ninja", "Lloyd - Energy Ninja", "Cole - Earth Ninja", "Nya - Water Ninja"];

var age = [15, 13, 16, 10, 20, 11, 12]

age.sort;


age.reverse() ;

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    

    var max_number = Math. max.apply(Math,age );
    console.log("The highest age is: ", max_number );

    
    var min_number = Math.min.apply(Math, age);
    console.log("The lowest age is: ", min_number);
}