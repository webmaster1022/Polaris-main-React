import { Button } from "@shopify/polaris";
import React from "react";
import { withPolarisExample } from "../../components/PolarisExamplePage";

function ButtonExample() {
  return <Button primary>Save theme</Button>;
}

export default withPolarisExample(ButtonExample);
