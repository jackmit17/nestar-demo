import { useState } from "react";

const Community = () => {
    console.log("COMMUNITY COMPONENT - APP ROUTER");
    const [title, setTitile] = useState<string>('hello');
    return <div>COMMUNITY <button onClick={() => alert("HELLO MIT")} style={{margin: '15px'}}>PRESSme</button></div>;
};

export default Community;