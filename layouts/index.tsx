import * as React from "react";

import Navigation from "../components/Navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="m-5">
      <div className="columns">
        <div className="column is-2">
          <Navigation />
        </div>
        <div className="column">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
