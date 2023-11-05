import file from './file';
import style from './style.module.css';


console.log(import.meta.env);

console.log("Server is running on " + import.meta.env.MODE);

console.log(import.meta.env.VITE_KEY);


if(import.meta.env.DEV) {
    console.log("Dev server");
}
console.log(file);
console.log("Hello World");
document.querySelector("h1").className = style.title