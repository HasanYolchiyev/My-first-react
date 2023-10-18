import Button from "./components/Button/Button";
import Input  from "./components/Input/Input";

import css from "./components/Button/Button.css";



const App = () =>(
    <div className="all">
        <h2>Input type</h2>
        <h1>All available input types are included</h1>
        <h1>Text</h1>
        <Input/>

        <h1>Your email</h1>
        <Input/>
        
        <h1>Your phone number</h1>
        <Input/>

        <h1>URL</h1>
        <Input/>

        <h1>Password</h1>
        <Input/>

        <h1>Search</h1>
        <Input/>

        <h1>Disabled field</h1>
        <Input/>

        <Button/>
    </div>
);

export default App;