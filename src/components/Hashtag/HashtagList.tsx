type HashtagListProps = {
  children: React.ReactNode;
};

const HashtagList = ({ children }: HashtagListProps) => {
  return <ul className="hashtags">{children}</ul>;
};

export default HashtagList;
