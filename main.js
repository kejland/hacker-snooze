const body = document.querySelector('body');

const parent = document.createElement('div');
parent.className = 'parent';

//parent.appendChild(child);
body.appendChild(parent);

// let test = document.createTextNode("Test text");
// child.appendChild(test);

//=========================================================================
//Get top 100 IDs:

fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
    
.then(function(httpRequest){
        return httpRequest.json();
    })
    
.then(function(data){
    let arr = data.slice(0, 100);
    //console.log(arr);

    //loop through arr to grag each story number:

    //create ol:
    let storyList = document.createElement("ol");
    parent.appendChild(storyList);

    for (let i = 0; i < arr.length; i++){
        let storyID = arr[i]

        //put story number in api format
        fetch(`https:hacker-news.firebaseio.com/v0/item/${storyID}.json?print=pretty`)
                
        .then(function(httpReponse){
            return httpReponse.json();
        })

        .then(function(data){

            let child = document.createElement('div');
            child.className = 'child';

            let story = document.createElement("li");
            story.innerText = data.title;

            child.appendChild(story);
            storyList.appendChild(child);

                    
        })

    }

})

