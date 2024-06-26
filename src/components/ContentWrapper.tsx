type ContentWrapperProps = {
  children: React.ReactNode;
};

const ContentWrapper = (props: ContentWrapperProps) => {
  const { children } = props;

  return <div className="container max-w-7xl">{children}</div>;
};

export default ContentWrapper;
