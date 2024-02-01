declare module "*.svg"{
    import React = require("react");
    export const ReactComponent : React.FC<React.SVGProps<SVGSVGElement>>;
    const src : string;
    export default src;
} module "*.jpg"{
  import React = require("react");
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}
