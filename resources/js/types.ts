export type PageProps = {
  auth?: {
    id: number;
    name: string;
    email: string;
    // add another property if needed
  } | null;
};
