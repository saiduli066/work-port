import React from 'react';

const Blog = () => {
    return (
      <div className='p-5'>
        <h1 className="lg:text-6xl text-3xl py-2 px-5 font-semibold text-center mb-10 bg-slate-50">Blogs Question and Answer</h1>

        <h4 className='text-3xl font-medium'>a. When should you use context API?</h4>
        <h5 className='text-xl mb-10'>
          Answer: The Context API in React should be used when you have data or
          state that needs to be shared across multiple components that are not
          directly related to each other in the component tree, in order to
          avoid prop drilling and make the data easily accessible.
        </h5>

        <h4 className='text-3xl font-medium '>b. What is a custom hook?</h4>
        <h5 className='text-xl mb-10'>
          Answer: A custom hook in React is a reusable function that contains a
          set of logic that can be shared between different components. It
          allows you to abstract complex logic and state management into a
          standalone function, improving code reusability, readability, and
          maintainability.
        </h5>

        <h4 className='text-3xl font-medium '>c. What is useRef?</h4>
        <h5 className='text-xl mb-10'>
          Answer: In React, useRef is a hook that returns a mutable ref object,
          which can be used to persist a value between renders without causing a
          re-render of the component. It is often used to reference a DOM
          element or to store any value that needs to be accessed and updated
          without triggering a re-render.
        </h5>

        <h4 className='text-3xl font-medium '>d. What is useMemo?</h4>
        <h5 className='text-xl mb-10'>
          Answer: In React, useMemo is a hook that memoizes a value, which means
          that it caches the result of a function and returns the cached result
          when the function is called again with the same inputs. It is often
          used to optimize the performance of expensive calculations or complex
          operations that are repeated frequently in a component. By using
          useMemo, you can avoid unnecessary re-renders of a component by only
          recomputing the cached value when the inputs have changed.
        </h5>
      </div>
    );
};

export default Blog;