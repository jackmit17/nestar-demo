import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { NextPage } from "next";
import { useState } from "react";

const Community: NextPage = () => {
  const [title, setTitile] = useState<string>("hello");
  return (
    <div>
      COMMUNITY
      <button onClick={() => alert("HELLO MIT")} style={{ margin: "15px" }}>
        PRESSme
      </button>
    </div>
  );
};

export default withLayoutBasic(Community);
