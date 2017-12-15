# Answers

1. Describe the concept of a "Single Source of Truth" in Redux. Ex. What is the difference between Redux/Application _State_ vs. React/Component _State_?

* Redux's "Single Source of Truth" has an application differnt states located in one globe state object that handles them all. Whin Redux a componens state is available to all of the application other components with out having to go threw the parent component.

2. Describe what an _Action_ is/does. An action is an object that dispatch to the reducer the type of action(state) being change and payload: optional additional information the reducer my need to preform the action.

3. Describe what a _Reducer_ is/does. A reducer changes state by returning either a modified copy of the state with the action applied or current state if it actions cannot be applied.

4. What does HTTP stand for? What does CRUD stand for? Describe four HTTP methods that can be mapped to the CRUD acronym that we use to interface with APIs/Servers.
   HTTP = Hypertext Transfer Protocol; CRUD = Create, read, update, delete
   ==============
   crud = http
   create = post;
   read = get;
   update = put;
   delete = delete
