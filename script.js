function addNewEducation()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" , 3);
    newNode.setAttribute("placeholder" , "Enter here");


    let EducationOb=document.getElementById("Education");
    let educationAddButtonOb=document.getElementById("educationAddButton");

    EducationOb.insertBefore(newNode , educationAddButton );
}

function addNewWorkExp()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" , 3);
    newNode.setAttribute("placeholder" , "Enter here");


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode , weAddButton );
}

function addNewProject()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("apField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" , 3);
    newNode.setAttribute("placeholder" , "Enter here");


    let apOb=document.getElementById("ap");
    let apAddButtonOb=document.getElementById("apAddButton");

    apOb.insertBefore(newNode , apAddButton );
}

// Generate CV function

function GenerateCV()
{
    //For Name
    let Name_Field=document.getElementById("Name_Field").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = Name_Field;

    document.getElementById("nameT2").innerHTML=Name_Field;

//for email
    let Email_Field=document.getElementById("Email_Field").value;
    let emailT=document.getElementById("emailT");
    emailT.innerHTML = Email_Field;

//for comtact number
    let Contact_Field=document.getElementById("Contact_Field").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML = Contact_Field;

//for address
    let Address_Field=document.getElementById("Address_Field").value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML = Address_Field;

// //for LinkedIn
//     let LinkedField=document.getElementById(" LinkedField").value;
//     let LdT=document.getElementById("LdT");
//     LdT.innerHTML =  LinkedField;

// //for Github
//     let GithubField=document.getElementById("GithubField").value;
//     let gtT =document.getElementById("gtT");
//     gtT.innerHTML =  GithubField;

// //for leetcode
//     let LeetcodeField=document.getElementById("LeetcodeField").value;
//     let LcT=document.getElementById("LcT");
//     LcT.innerHTML =  LeetcodeField;

//for important links
        document.getElementById("LdT").innerHTML=document.getElementById("LinkedField").value;
        document.getElementById("gtT").innerHTML=document.getElementById("GithubField").value;
        document.getElementById("LcT").innerHTML=document.getElementById("LeetcodeField").value;
    
//for obejective 
        document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

//for educations
         let edu = document.getElementsByClassName("educationField");

        let str2 = "";

        for(let e of edu)
        {
            str2 = str2 + `<li> ${e.value} </li>`;
        }
        document.getElementById("eduT").innerHTML = str2;


//for work experience 
        let work = document.getElementsByClassName("weField");

        let str = "";

        for(let e of work)
        {
            str = str + `<li> ${e.value} </li>`;
        }
        document.getElementById("weT").innerHTML = str;

//for academic projects
         let project = document.getElementsByClassName("apField");

        let str1 = "";

        for(let e of project)
        {
            str1+= `<li> ${e.value} </li>`;
        }
        document.getElementById("apT").innerHTML = str1;

        //after filling all info to hide the form and to display the CV
        document.getElementById("cv-form").style.display="none";
        document.getElementById("cv-template").style.display="block";
}

//for the print resume button
function printCV()
{
    Window.print();
}