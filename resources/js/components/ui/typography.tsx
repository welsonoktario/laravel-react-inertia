const Heading1 = ({ children }: { children: React.ReactNode }) => {
  return <h1 className="text-5xl font-bold">{children}</h1>;
};

const Heading2 = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="text-4xl font-bold">{children}</h2>;
};

const Heading3 = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-3xl font-bold">{children}</h3>;
};

const Heading4 = ({ children }: { children: React.ReactNode }) => {
  return <h4 className="text-2xl font-bold">{children}</h4>;
};

const Heading5 = ({ children }: { children: React.ReactNode }) => {
  return <h5 className="text-xl font-bold">{children}</h5>;
};

const Heading6 = ({ children }: { children: React.ReactNode }) => {
  return <h6 className="text-lg font-bold">{children}</h6>;
};

const PageTitle = Heading3;

const PageSubtitle = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-muted-foreground">{children}</p>;
};

export {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  PageSubtitle,
  PageTitle
};

