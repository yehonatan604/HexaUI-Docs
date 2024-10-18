import { hexaPath } from "../../../../../../Data/Constants/Paths";

const scrollAreaEx1 = `import { Scrollbar } from '${hexaPath}'

const App = () => {  
  return (
    <Scrollbar>
      <div className="h-[93vh]">
        {/* Your content here */}
      </div>
    </Scrollbar>
  );
};
`;

const scrollAreaEx2 = `import { Scrollbar } from '${hexaPath}'

const App = () => {  
  return (
    <Scrollbar maxHeight="fit">
      <div className="h-[93vh]">
        {/* Your content here */}
      </div>
    </Scrollbar>
  );
};
`;

export { scrollAreaEx1, scrollAreaEx2 };