export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section className="bg-amber-300">{children}</section>
  );
}