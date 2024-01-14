const post = {
    title: 'My awesome post',
    id: 1,
    body:"this is the body"
}
//Convert to JSON string
const str = JSON.stringify(post);

//Parse JSON

const ojb = JSON.parse(str);

console.log(ojb.id);//1


const posts = [
    {id:1, title: "My awesome post", body: "This is the body"},
    {id:2, title: "My second awesome post", body: "This is the body"},
]

const str2 = JSON.stringify(posts);//"[{"id":1,"title":"My awesome post","body":"This is the body"},{"id":2,"title":"My second awesome post","body":"This is the body"}]"

console.log(str);