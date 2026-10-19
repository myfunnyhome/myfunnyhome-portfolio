export default function SectionHeading({ id, children }) {
  return (
    <>
      <h2
        id={id}
        className="font-archivo text-[28px] font-bold leading-[1.1] tracking-[-0.015em] md:text-[40px]"
      >
        {children}
      </h2>
      <div className="mt-7 h-px bg-rule" />
    </>
  );
}
