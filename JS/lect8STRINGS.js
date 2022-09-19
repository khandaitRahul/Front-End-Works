//STRINGS in JS
let fname = "rahul";
let lname = new String("khandait");
console.log(fname + lname);
console.log(lname);

//find length of a sttring
//String.prototype.length
let Name = "RAHUL KHANDAIT";
console.log(Name.length);

//ESCAPE CHARACTER (\,"",'')
let line = "we are so called \"VIKINGS\" from the earth";
console.log(line);

//finding a string in a string
//String.prototype.indexOf
const bio = "my name is rahul khandait";
console.log(bio.indexOf("rahul"));
console.log(bio.lastIndexOf("rahul"));

//Searching in a string in a string
//String.prototype.search (regex)
console.log(bio.search("khandait"));

//Extracting String parts.
//slice()  :- extracts a part of a string and returns the extracted parts in a new string
var str = "apple,banana,kiwi,mango,papaya,guava";
var indexOfStr = str.indexOf("banana")
console.log(indexOfStr);
let res = str.slice(indexOfStr, -10)
console.log(res);

//the slice() selects the elements starting at the given argument,
// and ends at but does not include the given end argument.
// note : the original array will not change.


//PRACTICES
//Display only 280 characters of  a string like the one used in TWITTER
let myTweets = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero molestiae consequatur voluptatibus nesciunt ipsum dolor perspiciatis autem. Doloremque tempora modi dolorum. Placeat unde veritatis neque similique voluptates facere dolor, voluptate, provident blanditiis, recusandae esse asperiores dignissimos aliquid dolore laborum eaque! Laudantium blanditiis asperiores soluta nulla, mollitia ipsam nesciunt cumque! Minus porro sunt facilis voluptate eum aliquam et quo quibusdam omnis repellendus incidunt voluptas architecto tenetur, fugit necessitatibus ducimus pariatur eius qui aspernatur. Placeat quaerat inventore molestias sapiente sint doloribus libero suscipit eum maxime vero totam necessitatibus sit ea tempore eius obcaecati eveniet nisi corporis enim fugiat qui soluta natus, dicta cumque. Officia, dolorem pariatur cupiditate tempore, alias odio exercitationem aliquam sequi quo, esse voluptatem nisi rerum nostrum quidem totam voluptatum quas maxime fuga et! Nemo non voluptatum nam molestiae ipsum, facilis, consequatur ipsa commodi hic placeat ut necessitatibus modi deserunt alias est? Perspiciatis ipsam dolore temporibus esse ad nesciunt laboriosam, libero atque quis sunt aspernatur provident minima, exercitationem alias sit a laudantium nisi quos accusamus officia animi asperiores suscipit. Veniam perferendis voluptate, quisquam eveniet eum mollitia distinctio consequatur quae maxime impedit in cumque rem quis. Quaerat laboriosam consectetur pariatur incidunt officia suscipit ut repellat dolor modi ullam perspiciatis sed, neque est. Placeat voluptatum, ex error magni alias corrupti voluptates nisi enim atque nulla ad eum ipsa hic doloribus amet. Distinctio fugiat dignissimos saepe ducimus tenetur temporibus numquam veritatis ipsum nesciunt accusamus velit exercitationem aut quisquam ab sint natus repudiandae, consectetur quasi aspernatur dolorum ea, non explicabo sapiente! Culpa temporibus cumque odio qui eveniet animi quidem nesciunt vel nostrum libero natus minima omnis ducimus quae maxime porro, error nam dolorum perferendis illo inventore accusantium dolore rem! Eveniet, blanditiis eius minus eaque doloribus pariatur cupiditate deserunt nesciunt inventore! Earum omnis, esse debitis tenetur fugiat minima vel deleniti et expedita dolor, soluta blanditiis.";
let actualTweets = myTweets.slice(0, 279);
console.log(actualTweets, actualTweets.length);

//SUBSTRING() 
//it is similar to slice(). the differ. is that subString() cannot
//accept negative indexes.
var fruit = "apple,banana,kiwi";
let indexOfString = fruit.indexOf("banana");
console.log(indexOfString);
let response = fruit.substring(indexOfString, 14)
let responses = fruit.substr(-4); //use to extract string from backward
console.log(response);
console.log(responses);


//Replacing String Content()
//String.prototype.replace(searchFor, replaceWith) : it is a case sensitive
let myBio = "my name is rahul khandait";
let replaceBio = myBio.replace("rahul khandait", "summy jha");
console.log(replaceBio);
console.log(myBio);


//Extracting String Characters
//charAt(position) it retruns the string value present in that index
//charCodeAt(unicode) it return the unicode value of that string 
var char = "HELLO WORLD";
var newChar = char.charAt(6);
console.log(`the string value is ${newChar} and the unicode is ${char.charCodeAt(6)}`);

//charCodeAt()
var uniCode = "HELLO WORLD";
console.log(uniCode.charCodeAt(1));

//Property Access
//ES5(2009) allow property access [] on strings
var word = "JAVA SCRIPT";
console.log(word[2]);

//PRACTICES
//return a unicode of the last character in a string
var challenge = "rahul khandait";
var index = challenge.lastIndexOf("t");
console.log(`the last character index of string is ${index} and value is ${challenge.charCodeAt(index)}`);


//OTHER USEFUL METHODS
//to UpperCase to LowerCase
var givenName = "raHul KhandAit";
console.log(givenName.toUpperCase());
console.log(givenName.toLowerCase());

//the concat() method
var a = "qwertuy";
var b = "cjvsubnc";
console.log(a.concat(" ", b));

//String.trim() : remove the whiteSpaces from both sides
var trim = "           HELLO WORLD          ";
console.log(trim.trim());

//Split() : converting a string into an Array
var txt = "a, b,c, d,e,f";
console.log(txt.split(","));
console.log(txt.split(" "));
console.log(txt.split("|"));
