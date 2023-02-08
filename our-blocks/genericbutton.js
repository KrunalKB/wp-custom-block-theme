import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
import { RichText, BlockControls } from "@wordpress/block-editor";
import { registerBlockType } from "@wordpress/blocks";

registerBlockType("ourblocktheme/genericbutton", {
  title: "Generic Button",
  attributes: {
    text: {
      type: "string",
    },
    size: {
      type: "string",
      default: "large",
    },
  },
  edit: EditComponent,
  save: SaveComponent,
});

function EditComponent(props) {
  const onChangeText = value => {
    props.setAttributes({ text: value });
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={props.attributes.size === "large"}
            onClick={() => {
              props.setAttributes({ size: "large" });
            }}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === "medium"}
            onClick={() => {
              props.setAttributes({ size: "medium" });
            }}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={props.attributes.size === "small"}
            onClick={() => {
              props.setAttributes({ size: "small" });
            }}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        tagName="a"
        className={`btn btn--${props.attributes.size} btn--blue`}
        allowedFormats={[]}
        value={props.attributes.text}
        onChange={onChangeText}
      />
    </>
  );
}

function SaveComponent(props) {
  return (
    <a href="#" className={`btn btn--${props.attributes.size} btn--blue`}>
      {props.attributes.text}
    </a>
  );
}
