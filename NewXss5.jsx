function Page({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
