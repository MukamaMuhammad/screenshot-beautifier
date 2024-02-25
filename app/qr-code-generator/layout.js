import InterLink from "@components/tools/InterLinks/page";
export default function RootLayout({ children }) {
  return (
    <div>
      {children}
      <InterLink />
    </div>
  );
}
