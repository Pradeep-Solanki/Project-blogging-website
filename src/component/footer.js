import { CFooter } from "@coreui/react";
import { CLink } from "@coreui/react";

// import { CLink } from "path/to/module";

function footer() {
  return (
    <CFooter>
      <div>
        <CLink href="https://coreui.io">CoreUI</CLink>
        <span>&copy; 2023 creativeLabs.</span>
      </div>
      <div>
        <span>Powered by</span>
        <CLink href="https://coreui.io">CoreUI</CLink>
      </div>
    </CFooter>
  );
}

export default footer;
