function Profile({ bio }) {
  return <div dangerouslySetInnerHTML={{ __html: bio }} />;
}
