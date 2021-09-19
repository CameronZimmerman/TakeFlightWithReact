import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import Highlight, { defaultProps } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";

const Editor = React.forwardRef(({ code, context, displayContext }, ref) => {
  const scope = JSON.parse(context);
  console.log(scope);
  return (
    <section className="code-container">
      <h3>Context</h3>
      <Highlight
        {...defaultProps}
        code={displayContext}
        language="jsx"
        theme={nightOwl}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <h3>Your Code</h3>
      <LiveProvider code={code} scope={scope}>
        <LiveEditor theme={nightOwl} />
        <LiveError style={{ color: "red" }} />
        <div ref={ref}>
          <h3>Result</h3>
          <LivePreview className="result"/>
        </div>
      </LiveProvider>
    </section>
  );
});

export default Editor;
