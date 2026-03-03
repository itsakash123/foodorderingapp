 #namaste react
npm- manages packages install packages
package .json configuration for npm
why do we need it?
package is also kown a dependencies
npm will take care of what is the version of that package
bundlers-basically bundles or packages our app.so that it can be shift to production
we will use parcel bundler

2 dependencies->dev dependencies and normal dependencies
dev dependencies is required when we are developing our app
we are fetching parcel from npm

 "devDependencies": {
    "parcel": "^2.13.3"
  }
  ^->this means parcel will upgrade automatically if in future some upgrade version comes
package json ->is a configuration-it keeps a track of version what is installed in our system.it keeps a approx version

package lock json-> .it locks the version and keeps a record of it.it keeps a track of all the exact versions of all the dependencies

node modules ->is a database it contains actual data of packages or dependencies that our project needs.it contains all the code

if you have package json and package lock json you can recreate  all your node modules so this should  go  inside git
npx means executing a package.we have executed parcel
parcel has created  a server for us and hosting app to the server

in cdn we have to make network control but here we have react in node module
import React from "react"  =>> "react" ->this is coming from node modules

npm is used to install a package
npx is used to execute a package

#parcel
-dev build
 -local server
-HMR=>hot module replacement
-File watching algorithm is used by parcel-written in c++
Caching-faster builds
-image optimization
-Minification 
# bundling-bundles all files in one JS file
-compress
-consistent hashing
-code splitting
-differntial bundling-support older browser
-Diagnostic
-error handling
-https
-tree shaking-removing unused code
prod build-it is highly optimized and can be used for production

<!-- const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag"),
  ]),
]);

console.log(parent); -->
<!-- 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
   -->

   jsx is a convention where we merge html and js
   JSX React jsx is not html in JS.HTML like syntax

JSX(transpiled before it reaches JS engine)
transpiled->understand by browser .transpiling is done by -PARCEL-Babel

 JSX=> Babel transpiled to=> .createElement=>ReactElement -JS  object=>HTML element(render)

Babel=>some older browser does not understand ES6.babel transpile ES6 code to a code whic h older browser can understand

//attributes in JSX should be in camel case

/React component
//class Based component -OLD
//functional component-NEW

 # React Functional Component->it is just a normal JS function which return some JSX code


# LECTURE 5


 # TWO TYPES OF EXPORTS/IMPORTS
 # -Default Export/Import

export default component
import Component from "path"

# Named Export/Import

export const Component
import {component} from "path"

react is fast in DOM manipulation and this is the exact problem react is solving.suppose you have to keep your data and UI layer tied with each other then there comes REACT.


  # State Variable->Super Powerful Variable->For that we use React Hooks i.e useState()

  # React Hooks(Normal JS utility function)
  //react hook is a normal JS function given by react.that function has a special power
  useState()-superpowerful state variables in React
  useEffect()

   # Normal JS variables
  // let ListOfRestaurants = []

 # SuperPowerful Variable
  const [ListOfRestaurants,setListOfRestaurant] = useState([])

  so basicaly super powerful variable keeps the Ui in sync with the data layer .if listofRestaurant is a normal variable  and if will update it, UI will not get update .
  as soon as listofrestaurant changes it will automatically refresh our component .this is called render

  # IMPORTANT
  # whenever the state variable updates,React rerenders the component

React will keep your UI sync with data layer.in data layer when you have local state variables.. as soon as data layer updates your UI layer will update. How will it update ? it will update by rendering.


#Reconciliation Algorithm(React Fiber)is a new algorithm which comes in REACT16 .React fibre is a new way of finding div and updating the DOM

Virtual DOM-is representation of a actual DOM
it is a normal JS nested object


Diff Algorithm -it finds out differnece between updated virtual DOM nand previous virtual DOM

suppose on clicking restro cards which are 7(old) and on click they become 3(new) it just find out the difference between virtual DOM and then it actually updates the DOM
  Differen ce between 2 HTML code in Tough but between 2 object it is fast  as JS is fast.
  React keeps a track of all this UI ,ALL DOM NODES as virtual DOM
  # React is fast?why?

because react is doing efficient DOM manipulation How? because it has virtual DOM.react can efficiently find out the difference between 2 virtual DOM and can update the UI.

//not using keys(not acceptable) <<index as key<< unique key(best practice)



// lecture 6

# monolith architecture
earlier we used to have a huge big project and suppose we are building a application in this huge project we have small pieces example apis, we aslo have UI, database,sms,authentication code.we have all these things in one service.if i have to make a single change we have  to compiled and deployed this whole project.you can write code in only one language

# microservice architecture
we have diff services for diff jobs.these all small services (applications) combined together forms a big app.it follows single responsible principle.with this architecture all teams works on their independent service.you can write code in multiple languages

How do these service interact with each other?

there are diiferent types of interaction between them.
frontent->backend.we can try independent language for each service.they run on their own specific code.on diff ports eg :1234->UI, :1000:backend we can deploy diff services.all these ports can be mapped to domain name eg /api


we dont want to use mock data.how we can fetch data directly from api not hardcoded data


# two ways how webapps  fetch the data from the backend
 # Aproach 1

# loads ->api->Render
as soon as the page loads we can make api call wait for data to come and then we can render the UI.

# Aproach 2 ->this is a better approach BETTER UX
 # loads ->render->api->rerender
as soon as the page loads.we will render our UI .after render we will make an api call.and as soon as we get result from API we will rerender  the UI with the data that we get from UI..here atleast we can see the skeleton.the user does not see the so much lag.React renders our UI very fast

# HOOK-it is normal JS function given by react.which has its own specific purpose

# useEffect()->it come from react library.it is a function and it takes 2 arguments one is arrow function i.e callback function and  2nd one dependency array[] .this callback function will be called after your component renders

# if no dependency array =>useEffect is called on every render
 useEffect(()=>{
    console.log("useEffect called")
  });

# if dependency array is empty =[]=>useEffect is called on initial render(just once )

 useEffect(()=>{
    console.log("useEffect called")
  },[]);

# if dependency array is[btnnamereact]=>called everytime btnNameReact is updated

 useEffect(()=>{
    console.log("useEffect called")
  },[btnNameReact]);


  when body component  will render  and as soon as render cycle will finish.it will call the callback function

 // Local State Variable->Super Powerful Variable->For that we use React Hooks i.e useState().it sync  UI layer with data layer
  //whenever state variable changes it rerenders my component


  # CORS policy-> our browser is not  allowing us to call swiggy api from local host (from one origin to another origin) so use cors chrome extension(allow cors)


as soon as we get the data from api,we wil put the data in listofrestaurant  and as soon as list of restaurant updates react will rerender this component and it will update the UI with the new data

# why do we need state variable?
if we want dynamic change we want state variables
 
in local JS variables out UI will not render.if you want to  make your componenet dynamic we use state variable.

when we have a local variable these is not way for react to track whether btnName was updated or not.

const[btnNameReact,setbtnNameReact]=useState("Login")


when btnNameReact is updated using setbtnNameReact ,react will trigger render process
whenever state variable changes react will rerender header component.

 
 as soon as you call setbtnNamereact it will update btnnameReact value and it will  render component once again .it will find div between older version and newer version and it will find only button is changing.if header get refreshed only button will get refreshed

 everytime you login logout reconcillation  process is triggered .react will find difference between older DOM and new DOM

 to get data from input box i have to bind value to local state variable


 to make the input-box work  first we will have to bind input box i.e value={searchText} to a local state variable with empty string.as soon as my input changes  onchange function should update searchText 

 on every key pressing search text is updating and whole body component is rendering again and again





# whenever state variable update,react triggers a reconciliation cycle(rerenders the component)



//LECTURE 7
# always call useState() inside functional component
dont use useState() inside any  if-else condition ,for loop and functions.because it will create inconsistency


# we use link instead of anchor tag because anchor tag reloads the whole page and we dont want that

whenever you have to develop routes you have to create a routing configuration
  
React is  a single page application . In all the new pages only components are interchanging


 eg if you click on qbout us you should go on about us page
 
# Two Types Of Routing
-client side routing

here we do not making any network call .here all the components are already loaded in our app.here we already have the code

-server side routing

means you make a network call and the page<About Us> is coming from server side
 

 # useParams() it comes from react router dom.it will extract id
 
# eg {resId: '123'}-
Returns an object of key/value pairs of the dynamic params from the current URL that were matched by the routes. Child routes inherit all params from their parent routes.

# Link
Link is a component which is given by react router dom and behind the scenes it is using anchor tag.it is wrapper over anchor tag.here we do not have to refresh the page

// LECTURE 8
functional component is a JS function that returns piece of jsx

class component is a class which has render method which returns a piece of jsx

# When component is loaded first constructor is called then render() is called and once classed based component is mounted on dom then componentDidMount() is called

#componentDidMount()->is used to make an API call

# when component is mounted raect has 2 phase

 1) Render phase ->it has constructor and render
 2) Commit phase->it works with dom and component did mount is called
# first constructor is called then render is called and then react will update the DOM and then  componentDidMount() is called.

mounting->constructor->render->react updates DOM->componentDidMount


# LECTURE 8

<ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}- Rs{item.card.info.price / 100}
            </li>
          ))}
        </ul>


# lecture 12
# REDUX
redux and react are different libraries

redux offers easy debugging
redux offers state management


redux store is a big object and it is kept in a global central place.
any component can access this store .it can read write .
we have slices inside redux store.
cart slice user slice theme slice

you cannot directly modify cart slice.
when you click on add button it dispatches an action.after dispatching it calls the function (reducer).then this function modifies the slice of our redux store
.
how to read data from the cart?
so here we use selector for modify our react component;
this phenomena is called subscribing to the store.
header component is subscriber to the store through selector

CLICK ADD ->DISPTACH ACTION ->CALLS REDUNCER FUNCTION ->UPDATE SLICE OF REDUX STORE->CART COMPONENT OR HEADER COMPONENT IS SUBSCRIBED TO THE STORE USING selector


we use <Provider> store accssible ho over entire appilcation as central entity
# REDUX T0OLKIT
install @reduxjs/toolkit and react-redux
-build our store
connect our store to our app
slice(Cart slice)
dispatch(Action)
selector



# types of testing
- Unit Testing
- Integration testing
- end to end testing -e2e testing

# setting up testing in our app

- Install react teasting library (built on top of dom testing library)
- Installed jest
- Installed babel dependencies-babel is a transpiler
- Configure Babel
- configure parcel Config file to disable default babel transpilation
- Jest configuration -npx jest --init
- Install jsdom library
- Install @babel/preset-react-to make JSX work in test cases
- Include @babel/preset-react inside by babel config
- Install npm i -D @testing-Library/jest-dom


babel transpilation
- Include  @babel/preset-react inside my babel configuration

react testing library uses Jest(javascript testing framework) behind the scenes

parcel alredy uses babel and parcel has its own configuration for babel.now we are try to add extra configuration.
now we want our config to work

presents helps to covert jsx code to html code
# test and it are same"# foodorderingapp" 
