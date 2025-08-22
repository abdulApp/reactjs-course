import React, { useEffect } from "react";

const Example = () => {
  useEffect(() => {
    // Do your magic here
  });
  // 1. Without the array -> on every single render
  // 2. With an empty array -> only on the first render (componentDidMount)
  // 3. With a variable in the array -> on the first render and every time the variable changes
  // 4. Cleanup function -> return () => { do your cleanup here } (componentWillUnmount)
  // 5. With a variable in the array and a cleanup function -> on the first render and every time the variable changes, also on unmount
  // 6. Multiple useEffect calls -> you can have multiple useEffect calls in a single component
  // 7. Async functions -> you cannot make the useEffect callback async, but you can define an async function inside it and call it
  // 8. Fetching data -> useEffect is a great place to fetch data from an API
  // 9. Event listeners -> you can add event listeners in useEffect and clean them up in the cleanup function
  // 10. Dependencies -> be careful with dependencies, as they can cause infinite loops if not handled correctly
  // 11. Custom hooks -> you can create custom hooks that use useEffect internally
  // 12. Performance -> useEffect can impact performance if not used correctly, so be mindful of what you put in the dependency array
  // 13. React Strict Mode -> in development mode, React may call useEffect twice to help identify side effects
  // 14. useLayoutEffect -> similar to useEffect, but it fires synchronously after all DOM mutations
  // 15. useEffect vs useLayoutEffect -> useEffect is for side effects that don't require immediate DOM updates, while useLayoutEffect is for those that do
  // 16. Testing -> when testing components that use useEffect, you may need to use async utilities to wait for effects to complete
  // ❌❌❌ Avoid putting non-primitive values (objects, arrays, functions) directly in the dependency array, as they will cause the effect to run on every render due to reference inequality.
  // ❌❌❌ Avoid side effects that cause state updates without proper dependencies, as this can lead to infinite loops.
  // ❌❌❌ Avoid using useEffect for things that can be done during rendering, like calculating derived state.
  // ❌❌❌ Avoid making the useEffect callback async directly, as it can lead to unexpected behavior.
  // ❌❌❌ Avoid heavy computations inside useEffect that can block the main thread; consider using web workers for such tasks.
  // ❌❌❌ It's very wrong to call useEffect or any React Hooks
  // in side conditional statement.
  // React Hooks must be called in the exact same order in
  // every component render.
  // if(value > 0) {
  //     useEffect(() => {
  //         console.log("call useEffect");
  //         document.title = `You clicked ${value} times`;
  //     });
  // }
  //   ✅✅✅ Correct way
  //   useEffect(() => {
  //     if (value > 0) {
  //       console.log("call useEffect");
  //       document.title = `You clicked ${value} times`;
  //     }
  //   });

  return <div>Example</div>;
};

export default Example;
