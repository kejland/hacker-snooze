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
            story.innerHTML = `
            <div>
                <a href="${data.url}">${data.title}</a>
                <div>
                    ${data.score} points by ${data.by}      ||  ${data.kids.length} comments
                </div>
            </div>
            `

            child.appendChild(story);
            storyList.appendChild(child);

            

                    
        })

    }

})

// fetch("https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty")
// .then(function(httpResponse){
//     return httpResponse.json();
// })
// .then(function(data){
//     console.log(data.kids.length);
// })

// let test = [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ];

// console.log(test.length)