import { Description, Canvas, Subtitle, Title } from "@storybook/blocks";

export function Block(props: {
  title?: string;
  subTitle?: string;
  story: any;
  code?: string;
}) {
  const { title, subTitle, story, code } = props;

  return (
    <>
      {!!title && <Title>{title}</Title>}
      {!!subTitle && <Subtitle>{subTitle}</Subtitle>}
      <Description of={story} />
      <Canvas
        of={story}
        layout="padded"
        withToolbar={true}
        source={{
          code,
        }}
      />
    </>
  );
}
