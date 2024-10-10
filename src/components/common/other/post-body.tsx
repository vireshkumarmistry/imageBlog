
type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2x1 text-center">
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
