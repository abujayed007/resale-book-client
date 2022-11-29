import React from 'react';

const Blogs = () => {
    return (
        <div className='gap-y-5'>
            <div className='text-left shadow-lg p-7'>
                <h1 className="text-xl font-semibold">What are the different ways to manage a state in a React application?</h1>
                <h5 className='font-medium'>There are different ways to deal with state in React.</h5>
                <p>
                    <strong> 1. Local state:</strong> At component level, we can use it and change it as and when needed by calling the this.setState() method in the component class, also pass it child components (only readable in child components) .It’s a feature available only to class components.We can initialize the state in the class constructor <br />  <strong> 2. Redux : </strong> If you need to maintain a common state for the entire application, we can use 3rd party libraries out of which Redux is the most popular one.
                    It maintains a common/ global application state and can be used anywhere across the application and follows a single source of truth principle. To change a state we need to fire Actions and a single app state is maintained throughout the application.React together with Redux works great.
                    These are the two most common and used ways for state management in React.</p>
            </div>
            <div className=' text-left p-7 shadow-lg'>
                <h1 className="text-xl font-semibold"> How does prototypical inheritance work?</h1>
                <p>Prototypical inheritance works in a very similar way, except instead of having a special type pointer, you just have an exposed prototype object, and the object's own fields are used as priority. When you do foo.bar, it checks if bar is in foo, and if not, it checks its prototype, then its prototype's prototype, etc. If not found, you'll either get a run-time error or just undefined.The main difference is how instance data is treated. In javascript, prototypes are static and shared, which means you might be able to trivially understand it from a "classical" mindset if you imagine every parent class had to be static,and therefore, you only had one object to hold instance data, at the most specific subtype.You can also try an understand it the other way around: "classical" inheritance is like prototypical inheritance except every parent prototype can hold instance data.</p>
            </div>
            <div className=' text-left p-7 shadow-lg'>
                <h1 className="text-xl font-semibold">What is a unit test? Why should we write unit tests?</h1>
                <h5 className="font-medium">What is a unit test?</h5>
                <p>In a testing level hierarchy, unit testing is the first level of testing done before integration and other remaining levels of the testing. It uses modules for the testing process which reduces the dependency of waiting for Unit testing frameworks, stubs, drivers and mock objects are used for assistance in unit testing.</p>
                <h5 className="font-medium my-2">Why should we write unit tests?</h5>
                <ul>
                    <li>1. Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</li>
                    <li>2. Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.</li>
                    <li>3. It simplifies the debugging process.</li>
                    <li>4. Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.</li>
                    <li>5. Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.</li>
                </ul>
                <p></p>
            </div>
            <div className=' text-left p-7 shadow-lg gap-y-6'>
                <h1 className="text-xl font-semibold">React vs. Angular vs. Vue?</h1>
                <h5 className="font-medium">React</h5>
                <p>React offers easy and functional component creation. Furthermore, React’s elegant API urges you to make use of components. React is highly popular, especially in the startup community. By having a large selection of easily available open-source plugins and extensions, basically any type of website can be developed. Component templates are written using JSX, which can a bit different from what you're used to.Having such a large choice of extensions is great, but can be quite challenging and even confusing, especially for creators who are just getting started.</p>
                <h5 className="font-medium">Vue</h5>
                <p>Vue is the newest framework, which has a growing audience. It is the easiest among the three to get started with and is sufficiently powerful for more professional developers. Vue does not have as many built-in features as Angular but still has quite a bit more than React, which means you can get started with building websites with Vue right away. It is a popular choice among beginners. Vue also allows you to leverage your native HTML and CSS skills. Whatsmore, it is known for its well-written documentation, which is extremely useful. Recently Vue has also created the UI component in addition to the CLI. This even further simplifies the learning process for beginners and provides great statistics.</p>
                <h5 className="font-medium">Angular</h5>
                <p>Angular certainly provides more in the box than React or Vue. Because of this building complete solutions is more straightforward. Angular is popular with enterprises. Additionally, it provides the best Command Line Interface(CLI) among the three. While its syntax takes some time to get used to, Angular allows for better use of HTML and CSS. The code is rather verbose and complex compared to the other frameworks and the learning curve is certainly steeper.</p>
            </div>
        </div>
    );
};

export default Blogs;